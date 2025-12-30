# 多功能 AI 自媒体创作平台 技术选型说明书 (2025版)

## 1. 前端架构
*   **运行时/包管理**: **Bun** (极速安装与运行，替代 Node.js/npm)
*  采用 **monorepe**技术方案
*  用户端**框架**: **React 19** + **Next.js 15** (App Router, React Server Components, Server Actions)
*  管理后台采用 vite@8 + vue@3.5.26 + pinia
*   **状态管理**: **Zustand** (轻量化状态同步) + **TanStack Query v5** (高效异步数据同步)
*   **UI 组件库**: **Tailwind CSS v4** + **Shadcn UI** + **Magic UI** (更现代的动画与交互组件)
*   **工具链**: **Biome** (高性能 Linter & Formatter，替代 ESLint/Prettier)
*   **富文本编辑器**: **TipTap** (深度集成 AI 续写插件)

## 2. 后端多语言微服务架构
*   **主控接口层 (API Gateway & Main Logic)**:
    *   **框架**: **Go** + **go-zero** (高性能微服务框架，内置流量治理、日志、监控、熔断)
    *   **通讯协议**: **gRPC** + **Protobuf** (内部服务间高效通讯)
*   **AI 智能体服务 (AI Agent Service)**:
    *   **语言**: **Python 3.12+** (集成核心 AI/ML 库)
    *   **编排**: **LangGraph** (处理多智能体协作流)
    *   **通讯**: 通过 gRPC 接受 Go 主控层的调度
*   **高性能处理服务 (High Performance Service)**:
    *   **语言**: **Rust**
    *   **用途**: 针对视频流切片、大规模图像像素处理、并发加密等计算密集型任务
*   **任务编排**: **Temporal** (跨语言、长耗时工作流状态机管理)

## 3. AI/ML 模型与服务集成 (最新 SOTA 模型)
*   **大语言模型 (LLM)**:
    *   国内：**DeepSeek-V3 / R1** (性价比与性能巅峰)、**通义千问 Qwen-Max-Latest**
    *   国外：**OpenAI o1 / o3** (强推理系列)、**Claude 3.5 Sonnet** (代码与创作首选)
*   **文本转视频 (TTV)**:
    *   国内：**可灵 (Kling AI)**、**海螺 (Hailuo AI)**
    *   国外：**Runway Gen-3 Alpha**、**Luma Dream Machine**
*   **文本转图像 (TTI)**:
    *   **Flux.1 (Pro/Dev)** (目前最强的开源/闭源平衡模型)
    *   **Midjourney v6.1**
*   **文本转语音 (TTS)**:
    *   **GPT-4o TTS**, **ElevenLabs v2**, **Fish Speech** (支持极速克隆)

## 4. 数据库与存储
*   **主数据库**: **PostgreSQL** (通过 **go-zero** 的 `go-ctl` 自动生成数据访问层)
*   **缓存**: **Redis** (集成在 go-zero 的高性能缓存方案中)
*   **ORM**: **Ent** 或 **GORM** (Go 端类型安全操作)
*   **向量存储**: **Pgvector** (保持数据库架构统一) 或 **Upstash Vector**
*   **对象存储**: **Cloudflare R2** (零出口流量费)

## 5. 发布与集成层
*   **自动化分发**: 基于 **Go Playwright** 或调用 **Python/Playwright** 服务执行浏览器自动化。
*   **海量数据处理**: **ClickHouse** (分析全平台发布后的传播链路与效果数据)

## 6. 部署与运维
*   **微服务治理**: **go-zero 内置服务发现** (基于 etcd)
*   **容器化**: **Docker** + **OrbStack**
*   **云原生**: **Kubernetes (K8s)** (生产环境) + **Vercel** (前端)
*   **监控**: **Prometheus** + **Grafana** (go-zero 原生支持度极高)
