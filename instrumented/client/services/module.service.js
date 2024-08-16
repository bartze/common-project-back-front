function cov_lxad94q8d() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/client/services/module.service.js";
  var hash = "05c74151060c6dea53e48786f857644373eb95c6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/client/services/module.service.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "1": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 42
        }
      },
      "2": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 43
        }
      },
      "3": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 48
        }
      },
      "4": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 45
        }
      },
      "5": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 39
        }
      },
      "6": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 51
        }
      },
      "7": {
        start: {
          line: 37,
          column: 22
        },
        end: {
          line: 37,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 15
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 28
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        loc: {
          start: {
            line: 32,
            column: 23
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "05c74151060c6dea53e48786f857644373eb95c6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lxad94q8d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_lxad94q8d();
import http from '../http-common';

/**
 * ModuleService class that contains methods to interact with the server API using HTTP requests.
 * The http methods included are get, post, put and delete.
 */
class ModuleService {
  getAll() {
    cov_lxad94q8d().f[0]++;
    cov_lxad94q8d().s[0]++;
    return http.get('/modules');
  }
  get(id) {
    cov_lxad94q8d().f[1]++;
    cov_lxad94q8d().s[1]++;
    return http.get(`/modules/${id}`);
  }
  create(data) {
    cov_lxad94q8d().f[2]++;
    cov_lxad94q8d().s[2]++;
    return http.post('/modules', data);
  }
  update(id, data) {
    cov_lxad94q8d().f[3]++;
    cov_lxad94q8d().s[3]++;
    return http.put(`/modules/${id}`, data);
  }
  delete(id) {
    cov_lxad94q8d().f[4]++;
    cov_lxad94q8d().s[4]++;
    return http.delete(`/modules/${id}`);
  }
  deleteAll() {
    cov_lxad94q8d().f[5]++;
    cov_lxad94q8d().s[5]++;
    return http.delete(`/modules`);
  }
  findByTitle(title) {
    cov_lxad94q8d().f[6]++;
    cov_lxad94q8d().s[6]++;
    return http.get(`/modules?title=${title}`);
  }
}
const moduleService = (cov_lxad94q8d().s[7]++, new ModuleService());
export default moduleService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbHhhZDk0cThkIiwiYWN0dWFsQ292ZXJhZ2UiLCJodHRwIiwiTW9kdWxlU2VydmljZSIsImdldEFsbCIsImYiLCJzIiwiZ2V0IiwiaWQiLCJjcmVhdGUiLCJkYXRhIiwicG9zdCIsInVwZGF0ZSIsInB1dCIsImRlbGV0ZSIsImRlbGV0ZUFsbCIsImZpbmRCeVRpdGxlIiwidGl0bGUiLCJtb2R1bGVTZXJ2aWNlIl0sInNvdXJjZXMiOlsibW9kdWxlLnNlcnZpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi4vaHR0cC1jb21tb24nO1xuXG4vKipcbiAqIE1vZHVsZVNlcnZpY2UgY2xhc3MgdGhhdCBjb250YWlucyBtZXRob2RzIHRvIGludGVyYWN0IHdpdGggdGhlIHNlcnZlciBBUEkgdXNpbmcgSFRUUCByZXF1ZXN0cy5cbiAqIFRoZSBodHRwIG1ldGhvZHMgaW5jbHVkZWQgYXJlIGdldCwgcG9zdCwgcHV0IGFuZCBkZWxldGUuXG4gKi9cbmNsYXNzIE1vZHVsZVNlcnZpY2Uge1xuICAgIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAuZ2V0KCcvbW9kdWxlcycpO1xuICAgIH1cblxuICAgIGdldChpZCkge1xuICAgICAgICByZXR1cm4gaHR0cC5nZXQoYC9tb2R1bGVzLyR7aWR9YCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAucG9zdCgnL21vZHVsZXMnLCBkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAucHV0KGAvbW9kdWxlcy8ke2lkfWAsIGRhdGEpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZCkge1xuICAgICAgICByZXR1cm4gaHR0cC5kZWxldGUoYC9tb2R1bGVzLyR7aWR9YCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQWxsKCkge1xuICAgICAgICByZXR1cm4gaHR0cC5kZWxldGUoYC9tb2R1bGVzYCk7XG4gICAgfVxuXG4gICAgZmluZEJ5VGl0bGUodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIGh0dHAuZ2V0KGAvbW9kdWxlcz90aXRsZT0ke3RpdGxlfWApO1xuICAgIH1cbn1cblxuY29uc3QgbW9kdWxlU2VydmljZSA9IG5ldyBNb2R1bGVTZXJ2aWNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZVNlcnZpY2U7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosT0FBT0UsSUFBSSxNQUFNLGdCQUFnQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLENBQUM7RUFDaEJDLE1BQU1BLENBQUEsRUFBRztJQUFBSixhQUFBLEdBQUFLLENBQUE7SUFBQUwsYUFBQSxHQUFBTSxDQUFBO0lBQ0wsT0FBT0osSUFBSSxDQUFDSyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQy9CO0VBRUFBLEdBQUdBLENBQUNDLEVBQUUsRUFBRTtJQUFBUixhQUFBLEdBQUFLLENBQUE7SUFBQUwsYUFBQSxHQUFBTSxDQUFBO0lBQ0osT0FBT0osSUFBSSxDQUFDSyxHQUFHLENBQUMsWUFBWUMsRUFBRSxFQUFFLENBQUM7RUFDckM7RUFFQUMsTUFBTUEsQ0FBQ0MsSUFBSSxFQUFFO0lBQUFWLGFBQUEsR0FBQUssQ0FBQTtJQUFBTCxhQUFBLEdBQUFNLENBQUE7SUFDVCxPQUFPSixJQUFJLENBQUNTLElBQUksQ0FBQyxVQUFVLEVBQUVELElBQUksQ0FBQztFQUN0QztFQUVBRSxNQUFNQSxDQUFDSixFQUFFLEVBQUVFLElBQUksRUFBRTtJQUFBVixhQUFBLEdBQUFLLENBQUE7SUFBQUwsYUFBQSxHQUFBTSxDQUFBO0lBQ2IsT0FBT0osSUFBSSxDQUFDVyxHQUFHLENBQUMsWUFBWUwsRUFBRSxFQUFFLEVBQUVFLElBQUksQ0FBQztFQUMzQztFQUVBSSxNQUFNQSxDQUFDTixFQUFFLEVBQUU7SUFBQVIsYUFBQSxHQUFBSyxDQUFBO0lBQUFMLGFBQUEsR0FBQU0sQ0FBQTtJQUNQLE9BQU9KLElBQUksQ0FBQ1ksTUFBTSxDQUFDLFlBQVlOLEVBQUUsRUFBRSxDQUFDO0VBQ3hDO0VBRUFPLFNBQVNBLENBQUEsRUFBRztJQUFBZixhQUFBLEdBQUFLLENBQUE7SUFBQUwsYUFBQSxHQUFBTSxDQUFBO0lBQ1IsT0FBT0osSUFBSSxDQUFDWSxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ2xDO0VBRUFFLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUFBakIsYUFBQSxHQUFBSyxDQUFBO0lBQUFMLGFBQUEsR0FBQU0sQ0FBQTtJQUNmLE9BQU9KLElBQUksQ0FBQ0ssR0FBRyxDQUFDLGtCQUFrQlUsS0FBSyxFQUFFLENBQUM7RUFDOUM7QUFDSjtBQUVBLE1BQU1DLGFBQWEsSUFBQWxCLGFBQUEsR0FBQU0sQ0FBQSxPQUFHLElBQUlILGFBQWEsQ0FBQyxDQUFDO0FBRXpDLGVBQWVlLGFBQWEiLCJpZ25vcmVMaXN0IjpbXX0=