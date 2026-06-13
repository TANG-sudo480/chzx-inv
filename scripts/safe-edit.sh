#!/bin/bash
# 安全修改脚本 - 修改前自动备份

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKUP_DIR="$PROJECT_DIR/backups"

# 创建备份
create_backup() {
    mkdir -p "$BACKUP_DIR"
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"
    
    # 备份重要文件
    tar -czf "$BACKUP_FILE" \
        "$PROJECT_DIR/index.html" \
        "$PROJECT_DIR/local_enterprise_data.js" \
        "$PROJECT_DIR/factory_data.js" \
        "$PROJECT_DIR/.coze" \
        2>/dev/null
    
    echo "✅ 备份已创建: $BACKUP_FILE"
    
    # 保留最近10个备份
    cd "$BACKUP_DIR" && ls -t | tail -n +11 | xargs -r rm -f
}

# 提交代码
commit_changes() {
    cd "$PROJECT_DIR"
    
    echo "📋 当前修改:"
    git status --short
    
    read -p "输入提交信息: " msg
    if [ -z "$msg" ]; then
        msg="update: $(date +%Y%m%d)"
    fi
    
    git add .
    git commit -m "$msg"
    git push
    
    echo "✅ 已提交并推送"
}

# 显示帮助
show_help() {
    echo "使用方法:"
    echo "  ./safe-edit.sh backup    - 创建备份"
    echo "  ./safe-edit.sh commit   - 提交并推送"
    echo "  ./safe-edit.sh both     - 备份+提交推送"
    echo "  ./safe-edit.sh restore  - 列出可恢复的备份"
    echo ""
    echo "建议: 每次修改前运行 ./safe-edit.sh backup"
}

# 主逻辑
case "$1" in
    backup)
        create_backup
        ;;
    commit)
        commit_changes
        ;;
    both)
        create_backup
        commit_changes
        ;;
    restore)
        echo "可恢复的备份:"
        ls -lh "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null || echo "暂无备份"
        ;;
    *)
        show_help
        ;;
esac
