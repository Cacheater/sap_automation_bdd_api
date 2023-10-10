# CodeceptJS Api

## Requirements:
+ **Node: https://nodejs.org/es**
+ **CodeceptJs**

# Getting Started

```bash
$ git clone https://github.com/Cacheater/sap_automation_bdd_api
```

## Run Tests

Local run: 
	
Run Local Api 
```
docker pull mirakel14/digital-house-test
docker run -p 9000:9000 mirakel14/digital-house-test
```

```bash
$ npx codeceptjs run --grep @Imperativo
```

## Features Builder
```bash
$ npx codeceptjs gt
