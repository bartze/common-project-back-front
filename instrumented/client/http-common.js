function cov_2npz2fu5a6() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/client/http-common.js";
  var hash = "65c3a336dc20be9b4ed214427519ce0688e52266";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/client/http-common.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "65c3a336dc20be9b4ed214427519ce0688e52266"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2npz2fu5a6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2npz2fu5a6();
import axios from 'axios';
export default axios.create({
  baseURL: 'http://localhost:8082/api',
  headers: {
    'Content-type': 'application/json'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm5wejJmdTVhNiIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VzIjpbImh0dHAtY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG5cdGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwODIvYXBpJyxcblx0aGVhZGVyczoge1xuXHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxLQUFLLE1BQU0sT0FBTztBQUV6QixlQUFlQSxLQUFLLENBQUNDLE1BQU0sQ0FBQztFQUMzQkMsT0FBTyxFQUFFLDJCQUEyQjtFQUNwQ0MsT0FBTyxFQUFFO0lBQ1IsY0FBYyxFQUFFO0VBQ2pCO0FBQ0QsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119