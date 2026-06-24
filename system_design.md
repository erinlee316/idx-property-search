```mermaid
%% User → WhatsApp → OpenClaw Runtime → Skill Selector → Tool Execution → Memory Update → Response → User

flowchart TD
    U[User]
    ST[shortTerm: session state]
    LT[longTerm: vector store]
    TE[Tools: typed async functions]
    R[Response]
    subgraph Channels
        WA[WhatsApp]
        EM[email]
        WEB[web]
    end
    subgraph OR[OpenClaw Runtime]
        O[orchestrator]
        S[sessions]
    end
    subgraph Skills
        PS[propertySearch]
        MS[marketStats]
        RAG[RAG]
    end
    subgraph DB[MySQL Databases]
        RP[rets_property]
        CS[california_sold]
    end

    U --> WA & EM & WEB
    Channels --> S --> O --> PS & MS & RAG
    S --> ST
    LT --> RAG
    Skills --> TE --> ST
    PS --> RP
    MS --> CS
    ST --> R --> U

```
