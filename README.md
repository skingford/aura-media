# Aura Media - 多功能 AI 自媒体创作平台

本项目旨在开发一款集智能写作、多媒体内容生成及全平台发布于一体的 AI 自媒体创作平台。

## 项目文档

相关设计与规划文档已存放在 `docs/` 目录下：

- [产品需求文档 (PRD)](docs/PRD.md)
- [技术选型说明书 (TECH_STACK)](docs/TECH_STACK.md)

## 核心功能

1. **智能写作系统**：利用 Multi-Agent 架构实现深度小说创作与精准营销文案生成。
2. **多媒体内容生成**：支持短剧分镜脚本拆解、AI 视频合成、动漫角色与场景生成。
3. **全平台发布**：通过 API 与自动化分发引擎，实现一键适配多平台发布及全链路数据回传分析。

## 技术架构简述 (2025 最新版)

本项目采用**多语言微服务架构**以平衡开发效率、AI 模型集成和计算性能：

- **主控接口层**: Go + go-zero (gRPC, Protobuf)
- **AI 智能体层**: Python + LangGraph
- **高性能计算层**: Rust
- **前端**: React 19 + Next.js 15 + Bun
- **存储**: Supabase (PostgreSQL) + Cloudflare R2
