function cov_zup399l8f() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/models/index.js";
  var hash = "613d1aea027511451114c9a4cfe0ba70bd256712";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/models/index.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 50
        }
      },
      "1": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 38
        }
      },
      "2": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "3": {
        start: {
          line: 18,
          column: 11
        },
        end: {
          line: 18,
          column: 13
        }
      },
      "4": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "5": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 25
        }
      },
      "6": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 64
        }
      },
      "7": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 20
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "613d1aea027511451114c9a4cfe0ba70bd256712"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zup399l8f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_zup399l8f();
const dbConfig = (cov_zup399l8f().s[0]++, require("../config/db.config.js"));
const Sequelize = (cov_zup399l8f().s[1]++, require("sequelize"));
const sequelize = (cov_zup399l8f().s[2]++, new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
}));
const db = (cov_zup399l8f().s[3]++, {});
cov_zup399l8f().s[4]++;
db.Sequelize = Sequelize;
cov_zup399l8f().s[5]++;
db.sequelize = sequelize;
cov_zup399l8f().s[6]++;
db.modules = require("./module.model.js")(sequelize, Sequelize);
cov_zup399l8f().s[7]++;
module.exports = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfenVwMzk5bDhmIiwiYWN0dWFsQ292ZXJhZ2UiLCJkYkNvbmZpZyIsInMiLCJyZXF1aXJlIiwiU2VxdWVsaXplIiwic2VxdWVsaXplIiwiREIiLCJVU0VSIiwiUEFTU1dPUkQiLCJob3N0IiwiSE9TVCIsImRpYWxlY3QiLCJvcGVyYXRvcnNBbGlhc2VzIiwicG9vbCIsIm1heCIsIm1pbiIsImFjcXVpcmUiLCJpZGxlIiwiZGIiLCJtb2R1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRiQ29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy9kYi5jb25maWcuanNcIik7XG5cbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoZGJDb25maWcuREIsIGRiQ29uZmlnLlVTRVIsIGRiQ29uZmlnLlBBU1NXT1JELCB7XG4gIGhvc3Q6IGRiQ29uZmlnLkhPU1QsXG4gIGRpYWxlY3Q6IGRiQ29uZmlnLmRpYWxlY3QsXG4gIG9wZXJhdG9yc0FsaWFzZXM6IGZhbHNlLFxuXG4gIHBvb2w6IHtcbiAgICBtYXg6IGRiQ29uZmlnLnBvb2wubWF4LFxuICAgIG1pbjogZGJDb25maWcucG9vbC5taW4sXG4gICAgYWNxdWlyZTogZGJDb25maWcucG9vbC5hY3F1aXJlLFxuICAgIGlkbGU6IGRiQ29uZmlnLnBvb2wuaWRsZVxuICB9XG59KTtcblxuY29uc3QgZGIgPSB7fTtcblxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuXG5kYi5tb2R1bGVzID0gcmVxdWlyZShcIi4vbW9kdWxlLm1vZGVsLmpzXCIpKHNlcXVlbGl6ZSwgU2VxdWVsaXplKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixNQUFNRSxRQUFRLElBQUFGLGFBQUEsR0FBQUcsQ0FBQSxPQUFHQyxPQUFPLENBQUMsd0JBQXdCLENBQUM7QUFFbEQsTUFBTUMsU0FBUyxJQUFBTCxhQUFBLEdBQUFHLENBQUEsT0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUV0QyxNQUFNRSxTQUFTLElBQUFOLGFBQUEsR0FBQUcsQ0FBQSxPQUFHLElBQUlFLFNBQVMsQ0FBQ0gsUUFBUSxDQUFDSyxFQUFFLEVBQUVMLFFBQVEsQ0FBQ00sSUFBSSxFQUFFTixRQUFRLENBQUNPLFFBQVEsRUFBRTtFQUM3RUMsSUFBSSxFQUFFUixRQUFRLENBQUNTLElBQUk7RUFDbkJDLE9BQU8sRUFBRVYsUUFBUSxDQUFDVSxPQUFPO0VBQ3pCQyxnQkFBZ0IsRUFBRSxLQUFLO0VBRXZCQyxJQUFJLEVBQUU7SUFDSkMsR0FBRyxFQUFFYixRQUFRLENBQUNZLElBQUksQ0FBQ0MsR0FBRztJQUN0QkMsR0FBRyxFQUFFZCxRQUFRLENBQUNZLElBQUksQ0FBQ0UsR0FBRztJQUN0QkMsT0FBTyxFQUFFZixRQUFRLENBQUNZLElBQUksQ0FBQ0csT0FBTztJQUM5QkMsSUFBSSxFQUFFaEIsUUFBUSxDQUFDWSxJQUFJLENBQUNJO0VBQ3RCO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsTUFBTUMsRUFBRSxJQUFBbkIsYUFBQSxHQUFBRyxDQUFBLE9BQUcsQ0FBQyxDQUFDO0FBQUNILGFBQUEsR0FBQUcsQ0FBQTtBQUVkZ0IsRUFBRSxDQUFDZCxTQUFTLEdBQUdBLFNBQVM7QUFBQ0wsYUFBQSxHQUFBRyxDQUFBO0FBQ3pCZ0IsRUFBRSxDQUFDYixTQUFTLEdBQUdBLFNBQVM7QUFBQ04sYUFBQSxHQUFBRyxDQUFBO0FBRXpCZ0IsRUFBRSxDQUFDQyxPQUFPLEdBQUdoQixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0UsU0FBUyxFQUFFRCxTQUFTLENBQUM7QUFBQ0wsYUFBQSxHQUFBRyxDQUFBO0FBRWhFa0IsTUFBTSxDQUFDQyxPQUFPLEdBQUdILEVBQUUiLCJpZ25vcmVMaXN0IjpbXX0=