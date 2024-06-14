---
title: "Distributed Consensus: Where is it used?"
date: 2024-06-12 20:00:00 -0400
categories: [Distributed Systems]
tags: [Distributed Systems, Research]
pin: false
---

# Raft
  1. **etcd** (<a href="https://etcd.io/docs/v3.5/learning/api_guarantees/" target="_blank"> Refer </a>)
  2. **MongoDB** (<a href="https://www.youtube.com/watch?v=04ZI8HpFnCA" target="_blank"> Refer </a>) - Uses a variant of Raft. Instead of Raft's original *push* based mechanism where Master pushed logs to Followers, MongoDB uses a *pull* based mechanism. (I was lucky to study under Prof. Shuai Mu who's one of the co-author of this paper).
  3. **CockroachDB** (<a href="https://www.cockroachlabs.com/docs/v24.1/architecture/replication-layer#raft" target="_blank"> Refer </a>)
  4. **Hashicorp Consul** (<a href="https://developer.hashicorp.com/consul/docs/architecture/consensus" target="_blank"> Refer </a>)
  5. **Kafka** (<a href="https://cwiki.apache.org/confluence/display/KAFKA/KIP-500%3A+Replace+ZooKeeper+with+a+Self-Managed+Metadata+Quorum#KIP500:ReplaceZooKeeperwithaSelfManagedMetadataQuorum-Motivation" target="_blank"> Refer </a>) - Initially Kafka used Zookeeper.
  6. **Yugabyte** (<a href="https://www.yugabyte.com/tech/raft-consensus-algorithm/" target="_blank"> Refer </a>)
  7. **Couchbase** (<a href="https://docs.couchbase.com/server/current/learn/clusters-and-availability/metadata-management.html#consensus-based-metadata-management" target="_blank"> Refer </a>) - Uses Chronicle which is built upon Raft.
  8. **ScyllaDB** (<a href="https://opensource.docs.scylladb.com/stable/architecture/raft.html" target="_blank"> Refer </a>)
  9. **Neo4j** (<a href="https://neo4j.com/docs/bolt/current/driver-api/" target="_blank"> Refer </a>)
  10. **Redis** (<a href="https://redis.io/blog/redisraft-new-strong-consistency-deployment-option/" target="_blank"> Refer </a>)
  11. **EnterpriseDB** (<a href="https://www.enterprisedb.com/docs/pgd/4/harp/" target="_blank"> Refer </a>)
  12. **TiKV** (<a href="https://tikv.org/deep-dive/consensus-algorithm/introduction/" target="_blank"> Refer </a>)

# Paxos
  1. **LogDevice** (<a href="https://engineering.fb.com/2022/03/07/core-infra/augmenting-flexible-paxos-logdevice/" target="_blank"> Refer </a>) - Uses a variant of Paxos called **Flexible Paxos**.
  2. **FoundationDB** (<a href="https://www.foundationdb.org/files/fdb-paper.pdf" target="_blank"> Refer </a>) - Uses a variant of Paxos called **Active Disk Paxos**
  3. **Apache Cassandra** (<a href="https://cassandra.apache.org/doc/4.1/cassandra/architecture/guarantees.html" target="_blank"> Refer </a>)
  4. **Ceph (monitors)** (<a href="https://docs.ceph.com/en/latest/architecture/#high-availability-monitors" target="_blank"> Refer </a>)
  5. **Google Spanner** (<a href="https://cloud.google.com/spanner/docs/replication" target="_blank"> Refer </a>)
  6. **Amazon DynamoDB** (<a href="https://distributed-computing-musings.com/2022/07/paper-notes-amazon-dynamodb-a-scalable-predictably-performant-and-fully-managed-nosql-database-service/" target="_blank"> Refer </a>) - Uses multi-paxos.
  7. **Google Chubby** (<a href="https://static.googleusercontent.com/media/research.google.com/en//archive/chubby-osdi06.pdf" target="_blank"> Refer </a>)

# Zookeeper Atomic Broadcast (ZAB)
  1. **LogDevice's Sequencer** (<a href="https://engineering.fb.com/2017/08/31/core-infra/logdevice-a-distributed-data-store-for-logs/" target="_blank"> Refer </a>) - Uses to store the epoch number.
  2. **Twitter** (<a href="https://blog.x.com/engineering/en_us/topics/infrastructure/2018/zookeeper-at-twitter" target="_blank"> Refer </a>) Multiple usecases at Twitter use Zookeeper (though this blog is old).