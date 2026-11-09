export default {
    language: {
        name: '한국어'
    },
    main_fragment: {
        dashboard: '상태',
        basic: '기본 정보',
        settings: '설정'
    },
    bugreport: {
        export: '오류 보고서 내보내기',
        exporting: '내보내는 중…',
        export_success_title: '오류 보고서 내보내기 완료',
        export_success: '오류 보고서가 다음 위치에 저장되었습니다:',
        export_failed_title: '내보내기 실패',
        export_failed: '오류 보고서를 내보내지 못했습니다.',
        copy_path: '경로 복사',
        copy_path_failed: '복사 실패',
        send_log: '로그 보내기',
        send_failed: '전송 실패',
    },
    dashboard: {
        root_impl: '루트 구현 방식',
        zygote_monitor: 'Zygote 모니터',
        zygisk_module_title: 'Zygisk 모듈 없음 | Zygisk 모듈 ({0}개) | Zygisk 모듈 ({0}개)',
        zn_module_title: 'ZN 모듈 없음 | ZN 모듈 ({0}개) | ZN 모듈 ({0}개)',
        root_impl_normal: '현재 루트 구현 방식은 {impl}입니다. 차단 목록이 정상적으로 작동합니다.',
        root_impl_abnormal: '루트 구현 방식을 확인할 수 없어 차단 목록이 작동하지 않습니다.',
        root_impl_multiple: '여러 루트 구현 방식이 감지되어 차단 목록이 작동하지 않습니다.',
        kernelsu_denylist: 'KernelSU의 차단 목록은 앱 프로필에서 \'모듈 마운트 해제\'로 설정한 앱을 의미합니다.',
        magisk_denylist: 'Magisk의 차단 목록은 Magisk에 내장된 차단 목록을 의미합니다.',
        apatch_denylist: 'APatch의 차단 목록은 SuperUser 앱에서 \'제외\'를 활성화하고 루트 권한을 비활성화한 앱을 의미합니다.',
    },
    settings: {
        log_to_kernel: 'dmesg에 로그 기록 (개발자용)',
        nonroot_as_denylist: '루트 권한이 없는 앱도 차단 목록에 포함',
        enforce_denylist: '차단 목록 정책',
        enforce_denylist_desc: '강제 적용: 차단 목록에 있는 앱의 코드 주입을 차단하고 마운트 변경 사항을 되돌립니다.<br/>마운트 해제만: 코드 주입은 허용하고 마운트 변경 사항만 되돌립니다.',
        enforce_denylist_alert: '일반 사용자는 설정 충돌로 인해 마운트가 여러 번 해제되는 문제를 방지하기 위해 KernelSU 관리자에서 커널 마운트 해제 기능을 직접 끄는 것이 좋습니다.',
        denylist_disabled: '사용 안 함',
        denylist_enforced: '강제 적용',
        denylist_just_umount: '마운트 해제만',
        anonymous_memory: '익명 메모리 사용',
        anonymous_memory_desc: '모듈을 익명 메모리에 로드합니다. 로그를 읽기 어려워질 수 있지만 일부 구형 탐지 방식을 우회할 수 있습니다.',
        zn_linker: 'Zygisk Next 링커 사용',
        zn_linker_desc: '모듈을 로드할 때 시스템 링커 대신 내장 링커를 사용합니다. 탐지 회피 성능이 향상될 수 있지만 호환성 문제가 발생할 수 있습니다.',
    },
    zygote_inject_state: {
        running: '실행 중',
        stop_by_user: '사용자가 중지함',
        stop_by_crash: 'Zygote 충돌로 중지됨',
        running_desc: 'Zygote 모니터가 정상적으로 실행 중입니다.',
        stop_by_user_desc: '사용자가 Zygote 모니터를 중지했습니다.',
        stop_by_crash_desc: 'Zygote가 반복적으로 재시작되어 모니터가 자동으로 중지되었습니다.',
    },
    zygote_state: {
        unknown: '알 수 없음',
        injected: '주입 완료 ({pid})',
        inject_failed: '주입 실패 ({pid})',
        skipped: '건너뜀 ({pid})',
        abnormal: '비정상 ({pid})',
        unknown_desc: 'Zygote의 상태를 확인할 수 없습니다. 아직 시작되지 않았거나 Zygote 모니터가 시작을 감지하지 못했을 수 있습니다.',
        injected_desc: 'Zygote에 Zygisk가 주입되었습니다. 프로세스 ID: {pid}',
        inject_failed_desc: 'Zygote에 Zygisk 주입을 시도했지만 실패했습니다. 프로세스 ID: {pid}',
        skipped_desc: 'Zygote의 시작이 감지되었습니다. 프로세스 ID: {pid}. 다만 이전에 시스템이 여러 번 소프트 재부팅되어 Zygisk 주입이 중단되었습니다.',
        abnormal_desc: 'Zygote 프로세스({pid})에 Zygisk가 주입되었지만 JNI Hook에서 일치하는 메서드({funcs})를 찾지 못해 모듈이 정상적으로 로드되지 않습니다. 지원되지 않는 새 버전이거나 특수한 Android 시스템일 수 있습니다. 개발자가 지원을 추가할 수 있도록 GitHub에 이슈를 등록하고 현재 시스템의 /system/framework/framework.jar 및 /system/lib64/libandroid_runtime.so 파일을 첨부해 주세요.'
    },
    corrupted: {
        title: '모듈 파일 손상',
        desc: 'Zygisk Next에 적용한 변경 사항을 되돌린 후 다시 시도해 주세요.'
    },
    module: {
        issue: {
            title: '모듈에 문제가 있습니다',
            companion_api_issue: '{name} 모듈이 Companion API를 올바르게 사용하지 않아 프로세스 충돌이나 메모리 누수가 발생할 수 있습니다. 모듈 개발자에게 문의해 주세요.',
            linker_issue: '{name} 모듈을 로드하지 못했습니다. 모듈 개발자에게 문제를 신고해 주세요.',
            crash_issue: '{name} 모듈이 다음 프로세스의 충돌 스레드 추적 기록에서 발견되었습니다: {processes}.',
            unknown_process: '알 수 없는 프로세스',
            learn_more: '자세한 내용은 다음 링크를 확인하세요: {link}',
            check_banner: '문제가 있는 모듈이 없습니다. | 문제가 있는 모듈이 {0}개 있습니다. 모듈 목록을 확인해 주세요. | 문제가 있는 모듈이 {0}개 있습니다. 모듈 목록을 확인해 주세요.',
            badge: '문제',
            crash_badge: '충돌',
        },
        zn: {
            process_count: '프로세스 없음 | 프로세스 {0}개 | 프로세스 {0}개',
        },
    }
}
