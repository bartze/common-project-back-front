function cov_1tvlbryebi() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/config/db.config.js";
  var hash = "479d8171eb314805caf7305bd20347200b38ddd6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/config/db.config.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 1,
          column: 32
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 16
        }
      },
      "2": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 16,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 7
          },
          end: {
            line: 5,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 7
          },
          end: {
            line: 5,
            column: 16
          }
        }, {
          start: {
            line: 5,
            column: 20
          },
          end: {
            line: 5,
            column: 36
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 7
          },
          end: {
            line: 6,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 7
          },
          end: {
            line: 6,
            column: 17
          }
        }, {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 46
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 26
          }
        }, {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 7,
            column: 50
          }
        }],
        line: 7
      },
      "3": {
        loc: {
          start: {
            line: 8,
            column: 5
          },
          end: {
            line: 8,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 5
          },
          end: {
            line: 8,
            column: 15
          }
        }, {
          start: {
            line: 8,
            column: 19
          },
          end: {
            line: 8,
            column: 33
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "479d8171eb314805caf7305bd20347200b38ddd6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1tvlbryebi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1tvlbryebi();
const dotenv = (cov_1tvlbryebi().s[0]++, require('dotenv'));
cov_1tvlbryebi().s[1]++;
dotenv.config();
cov_1tvlbryebi().s[2]++;
module.exports = {
  HOST: (cov_1tvlbryebi().b[0][0]++, '0.0.0.0') || (cov_1tvlbryebi().b[0][1]++, process.env.HOST),
  USER: (cov_1tvlbryebi().b[1][0]++, 'postgres') || (cov_1tvlbryebi().b[1][1]++, process.env.USER_POSTGRES),
  PASSWORD: (cov_1tvlbryebi().b[2][0]++, 'localpassword') || (cov_1tvlbryebi().b[2][1]++, process.env.PASSWORD),
  DB: (cov_1tvlbryebi().b[3][0]++, 'postgres') || (cov_1tvlbryebi().b[3][1]++, process.env.DB),
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXR2bGJyeWViaSIsImFjdHVhbENvdmVyYWdlIiwiZG90ZW52IiwicyIsInJlcXVpcmUiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiSE9TVCIsImIiLCJwcm9jZXNzIiwiZW52IiwiVVNFUiIsIlVTRVJfUE9TVEdSRVMiLCJQQVNTV09SRCIsIkRCIiwiZGlhbGVjdCIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSJdLCJzb3VyY2VzIjpbImRiLmNvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcbmRvdGVudi5jb25maWcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEhPU1Q6ICcwLjAuMC4wJyB8fCBwcm9jZXNzLmVudi5IT1NULFxuXHRVU0VSOiAncG9zdGdyZXMnIHx8IHByb2Nlc3MuZW52LlVTRVJfUE9TVEdSRVMsXG5cdFBBU1NXT1JEOiAnbG9jYWxwYXNzd29yZCcgfHwgcHJvY2Vzcy5lbnYuUEFTU1dPUkQsXG5cdERCOiAncG9zdGdyZXMnIHx8IHByb2Nlc3MuZW52LkRCLFxuXHRkaWFsZWN0OiAncG9zdGdyZXMnLFxuXHRwb29sOiB7XG5cdFx0bWF4OiA1LFxuXHRcdG1pbjogMCxcblx0XHRhY3F1aXJlOiAzMDAwMCxcblx0XHRpZGxlOiAxMDAwMCxcblx0fSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixNQUFNRSxNQUFNLElBQUFGLGNBQUEsR0FBQUcsQ0FBQSxPQUFHQyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQUNKLGNBQUEsR0FBQUcsQ0FBQTtBQUNqQ0QsTUFBTSxDQUFDRyxNQUFNLENBQUMsQ0FBQztBQUFDTCxjQUFBLEdBQUFHLENBQUE7QUFFaEJHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2hCQyxJQUFJLEVBQUUsQ0FBQVIsY0FBQSxHQUFBUyxDQUFBLG1CQUFTLE1BQUFULGNBQUEsR0FBQVMsQ0FBQSxVQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtFQUNuQ0ksSUFBSSxFQUFFLENBQUFaLGNBQUEsR0FBQVMsQ0FBQSxvQkFBVSxNQUFBVCxjQUFBLEdBQUFTLENBQUEsVUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNFLGFBQWE7RUFDN0NDLFFBQVEsRUFBRSxDQUFBZCxjQUFBLEdBQUFTLENBQUEseUJBQWUsTUFBQVQsY0FBQSxHQUFBUyxDQUFBLFVBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxRQUFRO0VBQ2pEQyxFQUFFLEVBQUUsQ0FBQWYsY0FBQSxHQUFBUyxDQUFBLG9CQUFVLE1BQUFULGNBQUEsR0FBQVMsQ0FBQSxVQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksRUFBRTtFQUNoQ0MsT0FBTyxFQUFFLFVBQVU7RUFDbkJDLElBQUksRUFBRTtJQUNMQyxHQUFHLEVBQUUsQ0FBQztJQUNOQyxHQUFHLEVBQUUsQ0FBQztJQUNOQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxJQUFJLEVBQUU7RUFDUDtBQUNELENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=