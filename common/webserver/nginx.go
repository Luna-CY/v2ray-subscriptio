package webserver

import (
	"errors"
	"fmt"
	"os/exec"
	"strings"
)

// CheckNginxIsRunning 检查Nginx是否在运行状态
func CheckNginxIsRunning() (bool, error) {
	res, err := exec.Command("sh", "-c", "ps -ef | grep '/usr/sbin/nginx' | grep -v grep | awk '{print $2}'").Output()
	if nil != err && 0 != len(res) {
		return false, errors.New(fmt.Sprintf("检查Nginx状态失败: %v", err))
	}

	return "" != strings.TrimSpace(string(res)), nil
}

// StopNginx 停止Nginx进程
func StopNginx() error {
	res, err := exec.Command("nginx", "-s", "stop").Output()
	if nil != err && 0 != len(res) {
		return errors.New(fmt.Sprintf("停止Nginx失败: %v", err))
	}

	running, err := CheckNginxIsRunning()
	if nil != err {
		return err
	}

	if running {
		return errors.New("停止Nginx失败")
	}

	return nil
}