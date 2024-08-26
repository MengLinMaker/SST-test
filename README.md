# SST ION test

Probing the limitations of SST ION.

_Note: Results are taken on 26th Aug 2024. This is not supposed to be super accurate._

&nbsp;

## Performance results
### `sst deploy` from scratch
50 seconds for 3 functions. Very low CPU usage.

### `sst deploy` redeploy one function
30 seconds for single function change.

### `sst dev` 
60 seconds for setup.
Subsequent changes < 1 second.

### `sst remove`
25 seconds.

### Limitations
SST ION officially supports [Node 18 and 20](https://github.com/sst/ion/blob/d505faf7c4266b1d09134e8478122d024f880664/platform/src/components/aws/function.ts#L240). No other runtimes are specified explicitly. Python support is [beyond the maintainers expertise](https://github.com/sst/ion/issues/366#issuecomment-2096173042).

&nbsp;

## Comparison
### Serverless Framework v4
- SLS deploys in 100 seconds.
- SLS redeploys in 50 seconds.
- SLS removes in 20 seconds.
- No live reloading at all.

### SAM CLI
- 

&nbsp;

## Conclusion
General observations:
- [Remocal development](https://theburningmonk.com/2022/05/my-testing-strategy-for-serverless-applications/#:~:text=A%20remocal%20test%20is%20when,aka%20testing%20in%20the%20cloud) can be used in all IaC to speed up local development.

SST ION:
- Deployment speed is quite fast.
- Excels at fast e2e testing scenarios with only lambda changes.
- Only officially supports Node 18 and 20.
- Does offer a lot of high level abstractions.
- Extensive TypeScript and JSDoc documentation.
- No well explained examples. Well, most IaC seem to lack in this department.

Overall, SST ION seem like streamline experience for Node. Otherwise, best to stick to another IaC.
