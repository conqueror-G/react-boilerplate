commit: true로 설정하면, changeset CLI가 자동으로 변경 사항을 커밋합니다. 기본값은 false입니다.
updateInternalDependencies: 내부 의존성 업데이트 방법을 설정합니다. 이 값은 major, minor, patch 중 하나이며, 업데이트할 패키지의 변경 사항에 따라 적절한 값을 선택해야 합니다. 기본값은 patch입니다.
linked: 로컬에서 연결된 패키지의 경로를 지정합니다. changeset CLI는 이러한 패키지를 외부 패키지로 취급하지 않고 릴리스 버전을 계산합니다.
access: 패키지의 공개 범위를 설정합니다. restricted로 설정하면 패키지가 private 상태가 되어 npm 레지스트리에서 사용할 수 없습니다.
baseBranch: Pull Request에서 사용되는 기본 브랜치를 지정합니다. 기본값은 master입니다.
ignore: changeset CLI가 무시해야 하는 파일 패턴을 지정합니다.
changelog: 새 버전이 생성될 때마다 업데이트될 CHANGELOG.md 파일의 경로를 지정합니다. 이 파일은 버전별 변경 사항을 문서화하는 데 사용됩니다.
