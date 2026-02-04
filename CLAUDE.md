# CLAUDE.md

이 파일은 이 저장소에서 코드 작업 시 Claude Code에게 가이드를 제공합니다.

## 프로젝트 개요

**Readly Finance**: Vite + React + AWS Amplify 금융 애플리케이션

## 기술 스택

| 영역 | 기술 |
|-----|------|
| **Build** | Vite 5.4, TypeScript 5 |
| **Framework** | React 18 |
| **Styling** | Tailwind CSS 3.x |
| **Backend** | AWS Amplify Gen 2 |
| **Auth** | Amazon Cognito |
| **Database** | AWS AppSync + DynamoDB |

## 주요 디렉토리

```
readly-finance/
├── amplify/              # AWS Amplify 백엔드 설정
│   ├── auth/             # 인증 설정
│   ├── data/             # 데이터 모델
│   └── backend.ts        # 백엔드 엔트리
├── src/
│   ├── components/
│   │   ├── ui/           # 재사용 UI 컴포넌트 (Button 등)
│   │   └── layout/       # 레이아웃 컴포넌트
│   ├── hooks/            # 커스텀 React 훅
│   ├── lib/              # 유틸리티 함수
│   ├── types/            # TypeScript 타입 정의
│   ├── assets/           # 정적 에셋
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 엔트리 포인트
├── public/               # 공개 정적 파일
└── dist/                 # 빌드 출력 (gitignore)
```

## 개발 명령어

```bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run preview      # 프로덕션 빌드 미리보기
npm run lint         # ESLint 실행
npm run type-check   # TypeScript 타입 체크
```

## Amplify 명령어

```bash
npx ampx sandbox     # 백엔드 샌드박스 실행 (개발)
npx ampx generate outputs --app-id <app-id> --branch main  # 출력 파일 생성
```

## 환경 설정

### Node.js 버전
- 최소: Node.js 18
- 권장: Node.js 20 (.nvmrc 파일 참조)

### Amplify 설정
Amplify 백엔드 배포 후 `amplify_outputs.json` 파일이 생성됩니다.
`src/main.tsx`에서 Amplify 설정 주석을 해제하세요:

```typescript
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'
Amplify.configure(outputs)
```

## 작업 워크플로우

### 코드 수정 시
1. 관련 파일 확인 (기존 패턴 파악)
2. 작은 단위로 수정
3. `npm run lint && npm run type-check` 실행
4. 커밋

### 빌드 확인
```bash
npm run build
```

## Git 브랜치
- `main`: 프로덕션 브랜치 (Amplify 배포 연결)
