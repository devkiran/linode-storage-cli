## Linode Object Storage CLI Tool

A CLI tool for interacting with Linode Object Storage API.

### Installation

```
# Global installation
npm install -g linode-storage-cli
```

### Usage

Run the command `los` to see all the options.

Add the Linode Personal Access Token.

```
los config <Token>
```

Returns a list of all Buckets that you own.

```
los bucket-list
```

Returns a single bucket.

```
los bucket-view <label> <cluster>
```

Creates a bucket.

```
los bucket-create [options] <label> <cluster> <acl>
```

Removes a bucket.

```
los bucket-remove <label> <cluster>
```

Returns the contents of a bucket.

```
los object-list <label> <cluster>
```

Change basic CORS and ACL settings.

```
los bucket-access-modify --label=<bucket> --cluster=<cluster> --acl=<acl> --cors=<true|false>
```
