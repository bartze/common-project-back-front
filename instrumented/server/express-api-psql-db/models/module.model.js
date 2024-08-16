function cov_p6kqxedki() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/models/module.model.js";
  var hash = "e535d228baf70a9de3e242c99d3df87b89374c63";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/models/module.model.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 19
        },
        end: {
          line: 12,
          column: 6
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 17
          },
          end: {
            line: 1,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1,
            column: 43
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e535d228baf70a9de3e242c99d3df87b89374c63"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_p6kqxedki = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_p6kqxedki();
cov_p6kqxedki().s[0]++;
module.exports = (sequelize, Sequelize) => {
  cov_p6kqxedki().f[0]++;
  const Module = (cov_p6kqxedki().s[1]++, sequelize.define('Module', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  }));
  cov_p6kqxedki().s[2]++;
  return Module;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcDZrcXhlZGtpIiwiYWN0dWFsQ292ZXJhZ2UiLCJzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIlNlcXVlbGl6ZSIsImYiLCJNb2R1bGUiLCJkZWZpbmUiLCJ0aXRsZSIsInR5cGUiLCJTVFJJTkciLCJkZXNjcmlwdGlvbiIsInB1Ymxpc2hlZCIsIkJPT0xFQU4iXSwic291cmNlcyI6WyJtb2R1bGUubW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjb25zdCBNb2R1bGUgPSBzZXF1ZWxpemUuZGVmaW5lKCdNb2R1bGUnLCB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICAgICAgfSxcbiAgICAgICAgcHVibGlzaGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBNb2R1bGU7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBQUFBLGFBQUEsR0FBQUUsQ0FBQTtBQWZaQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsS0FBSztFQUFBTixhQUFBLEdBQUFPLENBQUE7RUFDdkMsTUFBTUMsTUFBTSxJQUFBUixhQUFBLEdBQUFFLENBQUEsT0FBR0csU0FBUyxDQUFDSSxNQUFNLENBQUMsUUFBUSxFQUFFO0lBQ3RDQyxLQUFLLEVBQUU7TUFDSEMsSUFBSSxFQUFFTCxTQUFTLENBQUNNO0lBQ3BCLENBQUM7SUFDREMsV0FBVyxFQUFFO01BQ1RGLElBQUksRUFBRUwsU0FBUyxDQUFDTTtJQUNwQixDQUFDO0lBQ0RFLFNBQVMsRUFBRTtNQUNQSCxJQUFJLEVBQUVMLFNBQVMsQ0FBQ1M7SUFDcEI7RUFDSixDQUFDLENBQUM7RUFBQ2YsYUFBQSxHQUFBRSxDQUFBO0VBRUgsT0FBT00sTUFBTTtBQUNqQixDQUFDIiwiaWdub3JlTGlzdCI6W119