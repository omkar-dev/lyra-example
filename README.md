# lyra-example
Evaluating [Lyra Db](https://github.com/LyraSearch/lyra) Fast, in-memory, typo-tolerant, full-text search engine written in TypeScript.

This Project Aims to log the perf of lyra db search and store for series of incremental data

following is the structure of the sample data 

```json
  {
    "_id": "1",
    "tags": "pizza",
    "imageUrl": "testUrl",
    "category": "temp"
  },

```


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
while search reults for them were astonishing fast for no sample data the search for a single cahracter across all feilds was more than 0.0006 seconds 

```
results : 
04 records : 291600n
10 records : 443500n
100 records : 331200n
1 thousand records : 519000n
10 thousands records : 312300n
1 lac records : 269000n
```
