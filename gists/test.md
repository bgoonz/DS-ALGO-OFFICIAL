FORMAT: 1A
HOST: https://futr.bridgeconx.com

# Futr

A simple API for scheduling API Calls in the Future.

## API Details [/]

If an API Endpoint returns an `eager` key in the JSON Payload, you can provide a comma-separated list of strings from the `eager.available` array to eager load the specified relations into the response.

### Get API Details [GET]

-   Request

    -   Headers

              Accept: application/json

-   Response 200 (application/json)

    -   Headers

              Transfer-Encoding: chunked
              Cache-Control: no-cache

    -   Body

              {"name":"Futr","description":"A REST API for scheduling Guzzle Requests in the future.","version":"0.0.1"}

### Routes [/routes]

### Get API Routes [GET]

-   Request

    -   Headers

              Accept: application/json

-   Response 200 (application/json)

    -   Headers

              Transfer-Encoding: chunked
              Cache-Control: no-cache

    -   Body

              {"GET\/":{"method":"GET","uri":"\/","action":{"as":"home","description":"Get API Details","0":{}}},"GET\/routes":{"method":"GET","uri":"\/routes","action":{"as":"routes","description":"List API Routes","0":{}}},"GET\/jobs":{"method":"GET","uri":"\/jobs","action":{"as":"jobs.index","uses":"App\\Http\\Controllers\\JobsController@index","description":"List all jobs"}},"GET\/jobs\/{jobs}":{"method":"GET","uri":"\/jobs\/{jobs}","action":{"as":"jobs.show","uses":"App\\Http\\Controllers\\JobsController@show","description":"Show a Job"}},"POST\/jobs":{"method":"POST","uri":"\/jobs","action":{"as":"jobs.store","uses":"App\\Http\\Controllers\\JobsController@store","description":"Create a Job"}},"DELETE\/jobs\/{jobs}":{"method":"DELETE","uri":"\/jobs\/{jobs}","action":{"as":"jobs.destroy","uses":"App\\Http\\Controllers\\JobsController@destroy","description":"Cancells Job and all future Attempts"}},"GET\/jobs\/{jobs}\/attempts":{"method":"GET","uri":"\/jobs\/{jobs}\/attempts","action":{"as":"jobs.attempts.index","uses":"App\\Http\\Controllers\\AttemptsController@index","description":"Show a Job's Attempts"}},"GET\/jobs\/{jobs}\/attempts\/{attempts}":{"method":"GET","uri":"\/jobs\/{jobs}\/attempts\/{attempts}","action":{"as":"jobs.attempts.show","uses":"App\\Http\\Controllers\\AttemptsController@show","description":"Show an Attempt"}},"POST\/jobs\/{jobs}\/attempts\/{attempts}\/try":{"method":"POST","uri":"\/jobs\/{jobs}\/attempts\/{attempts}\/try","action":{"as":"jobs.attempts.try","uses":"App\\Http\\Controllers\\AttemptsController@tryAttempt","description":"Execute attempt, only if it has not yet been attempted"}},"POST\/jobs\/{jobs}\/attempts\/{attempts}\/retry":{"method":"POST","uri":"\/jobs\/{jobs}\/attempts\/{attempts}\/retry","action":{"as":"jobs.attempts.retry","uses":"App\\Http\\Controllers\\AttemptsController@retryAttempt","description":"Execute attempt, whether or not it has already been attempted"}}}
