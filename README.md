# lyra-example
Evaluating [Lyra Db](https://github.com/LyraSearch/lyra)  - IN memory search performance
Lyra is Fast, in-memory, typo-tolerant, full-text search engine written in TypeScript.

This Project Aims to log the perf of lyra db search and store for series of incremental data
following are the sampling sizes of data used against english language

```
4,10,100,1000,10000,10000
```

Results for search and store

```
04 records : 0.19 s
10 records: 0.19 s
100 records : 0.19 s 
1 thousand records :0.33s
10 thousands records : 0.74s
1 lac records : 11 sec
```

