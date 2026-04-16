---
title: "Distributed Consensus: Where is it used?"
date: 2024-06-12
category: Distributed Systems
excerpt: A reference map of where Raft, Paxos, and ZAB actually show up in production systems — from etcd to Spanner to Kafka.
---

# Distributed Consensus: Where is it used?

## Raft

- **etcd** ([Refer](https://etcd.io/docs/v3.5/learning/api_guarantees/))
- **MongoDB** ([Refer](https://www.youtube.com/watch?v=04ZI8HpFnCA)) — Uses a variant of Raft. Instead of Raft's original *push* based mechanism where Master pushed logs to Followers, MongoDB uses a *pull* based mechanism. (I was lucky to study under Prof. Shuai Mu who's one of the co-authors of this paper.)
- **CockroachDB** ([Refer](https://www.cockroachlabs.com/docs/v24.1/architecture/replication-layer#raft))
- **Hashicorp Consul** ([Refer](https://developer.hashicorp.com/consul/docs/architecture/consensus))
- **Kafka** ([Refer](https://cwiki.apache.org/confluence/display/KAFKA/KIP-500%3A+Replace+ZooKeeper+with+a+Self-Managed+Metadata+Quorum)) — Initially Kafka used Zookeeper.
- **Yugabyte** ([Refer](https://www.yugabyte.com/tech/raft-consensus-algorithm/))
- **Couchbase** ([Refer](https://docs.couchbase.com/server/current/learn/clusters-and-availability/metadata-management.html)) — Uses Chronicle which is built upon Raft.
- **ScyllaDB** ([Refer](https://opensource.docs.scylladb.com/stable/architecture/raft.html))
- **Neo4j** ([Refer](https://neo4j.com/docs/bolt/current/driver-api/))
- **Redis** ([Refer](https://redis.io/blog/redisraft-new-strong-consistency-deployment-option/))
- **TiKV** ([Refer](https://tikv.org/deep-dive/consensus-algorithm/introduction/))

## Paxos

- **LogDevice** ([Refer](https://engineering.fb.com/2022/03/07/core-infra/augmenting-flexible-paxos-logdevice/)) — Uses a variant called **Flexible Paxos**.
- **FoundationDB** ([Refer](https://www.foundationdb.org/files/fdb-paper.pdf)) — Uses a variant called **Active Disk Paxos**.
- **Apache Cassandra** ([Refer](https://cassandra.apache.org/doc/4.1/cassandra/architecture/guarantees.html))
- **Ceph (monitors)** ([Refer](https://docs.ceph.com/en/latest/architecture/#high-availability-monitors))
- **Google Spanner** ([Refer](https://cloud.google.com/spanner/docs/replication))
- **Amazon DynamoDB** ([Refer](https://distributed-computing-musings.com/2022/07/paper-notes-amazon-dynamodb/)) — Uses multi-paxos.
- **Google Chubby** ([Refer](https://static.googleusercontent.com/media/research.google.com/en//archive/chubby-osdi06.pdf))

## Zookeeper Atomic Broadcast (ZAB)

- **LogDevice's Sequencer** ([Refer](https://engineering.fb.com/2017/08/31/core-infra/logdevice-a-distributed-data-store-for-logs/)) — Used to store the epoch number.
- **Twitter** ([Refer](https://blog.x.com/engineering/en_us/topics/infrastructure/2018/zookeeper-at-twitter)) — Multiple use cases at Twitter use Zookeeper.
