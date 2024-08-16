function cov_1qchzcfp41() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/routes/modules.routes.js";
  var hash = "a6293b5d8ebd0a29edc8455eb8bb16ba81517a45";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/server/express-api-psql-db/routes/modules.routes.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 2,
          column: 64
        }
      },
      "2": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 43
        }
      },
      "3": {
        start: {
          line: 7,
          column: 1
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "4": {
        start: {
          line: 10,
          column: 1
        },
        end: {
          line: 10,
          column: 34
        }
      },
      "5": {
        start: {
          line: 13,
          column: 1
        },
        end: {
          line: 13,
          column: 52
        }
      },
      "6": {
        start: {
          line: 16,
          column: 1
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "7": {
        start: {
          line: 21,
          column: 1
        },
        end: {
          line: 21,
          column: 36
        }
      },
      "8": {
        start: {
          line: 24,
          column: 1
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "9": {
        start: {
          line: 27,
          column: 1
        },
        end: {
          line: 27,
          column: 39
        }
      },
      "10": {
        start: {
          line: 32,
          column: 1
        },
        end: {
          line: 32,
          column: 33
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
            column: 26
          },
          end: {
            line: 33,
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
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a6293b5d8ebd0a29edc8455eb8bb16ba81517a45"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qchzcfp41 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1qchzcfp41();
cov_1qchzcfp41().s[0]++;
module.exports = app => {
  cov_1qchzcfp41().f[0]++;
  const modules = (cov_1qchzcfp41().s[1]++, require('../controllers/modules.controller.js'));
  const router = (cov_1qchzcfp41().s[2]++, require('express').Router());

  // Create a new Tutorial
  cov_1qchzcfp41().s[3]++;
  router.post('/', modules.create);

  // Retrieve all modules
  cov_1qchzcfp41().s[4]++;
  router.get('/', modules.findAll);

  // Retrieve all published modules
  cov_1qchzcfp41().s[5]++;
  router.get('/published', modules.findAllPublished);

  // Retrieve a single Tutorial with id
  cov_1qchzcfp41().s[6]++;
  router.get('/:id', modules.findOne);

  // router.get('/chat', modules.chat); // chat should be in charge after move the client

  // Update a Tutorial with id
  cov_1qchzcfp41().s[7]++;
  router.put('/:id', modules.update);

  // Delete a Tutorial with id
  cov_1qchzcfp41().s[8]++;
  router.delete('/:id', modules.delete);

  // Delete all modules
  cov_1qchzcfp41().s[9]++;
  router.delete('/', modules.deleteAll);

  // Router go to chat front end endpoint
  //router.get('/chat', modules.chat);
  cov_1qchzcfp41().s[10]++;
  app.use('/api/modules', router);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXFjaHpjZnA0MSIsImFjdHVhbENvdmVyYWdlIiwicyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJmIiwibW9kdWxlcyIsInJlcXVpcmUiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwiY3JlYXRlIiwiZ2V0IiwiZmluZEFsbCIsImZpbmRBbGxQdWJsaXNoZWQiLCJmaW5kT25lIiwicHV0IiwidXBkYXRlIiwiZGVsZXRlIiwiZGVsZXRlQWxsIiwidXNlIl0sInNvdXJjZXMiOlsibW9kdWxlcy5yb3V0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoYXBwKSA9PiB7XG5cdGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9tb2R1bGVzLmNvbnRyb2xsZXIuanMnKTtcblxuXHRjb25zdCByb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJykuUm91dGVyKCk7XG5cblx0Ly8gQ3JlYXRlIGEgbmV3IFR1dG9yaWFsXG5cdHJvdXRlci5wb3N0KCcvJywgbW9kdWxlcy5jcmVhdGUpO1xuXG5cdC8vIFJldHJpZXZlIGFsbCBtb2R1bGVzXG5cdHJvdXRlci5nZXQoJy8nLCBtb2R1bGVzLmZpbmRBbGwpO1xuXG5cdC8vIFJldHJpZXZlIGFsbCBwdWJsaXNoZWQgbW9kdWxlc1xuXHRyb3V0ZXIuZ2V0KCcvcHVibGlzaGVkJywgbW9kdWxlcy5maW5kQWxsUHVibGlzaGVkKTtcblxuXHQvLyBSZXRyaWV2ZSBhIHNpbmdsZSBUdXRvcmlhbCB3aXRoIGlkXG5cdHJvdXRlci5nZXQoJy86aWQnLCBtb2R1bGVzLmZpbmRPbmUpO1xuXG5cdC8vIHJvdXRlci5nZXQoJy9jaGF0JywgbW9kdWxlcy5jaGF0KTsgLy8gY2hhdCBzaG91bGQgYmUgaW4gY2hhcmdlIGFmdGVyIG1vdmUgdGhlIGNsaWVudFxuXG5cdC8vIFVwZGF0ZSBhIFR1dG9yaWFsIHdpdGggaWRcblx0cm91dGVyLnB1dCgnLzppZCcsIG1vZHVsZXMudXBkYXRlKTtcblxuXHQvLyBEZWxldGUgYSBUdXRvcmlhbCB3aXRoIGlkXG5cdHJvdXRlci5kZWxldGUoJy86aWQnLCBtb2R1bGVzLmRlbGV0ZSk7XG5cblx0Ly8gRGVsZXRlIGFsbCBtb2R1bGVzXG5cdHJvdXRlci5kZWxldGUoJy8nLCBtb2R1bGVzLmRlbGV0ZUFsbCk7XG5cblx0Ly8gUm91dGVyIGdvIHRvIGNoYXQgZnJvbnQgZW5kIGVuZHBvaW50XG5cdC8vcm91dGVyLmdldCgnL2NoYXQnLCBtb2R1bGVzLmNoYXQpO1xuXG5cdGFwcC51c2UoJy9hcGkvbW9kdWxlcycsIHJvdXRlcik7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQUFBQSxjQUFBLEdBQUFFLENBQUE7QUFmWkMsTUFBTSxDQUFDQyxPQUFPLEdBQUlDLEdBQUcsSUFBSztFQUFBTCxjQUFBLEdBQUFNLENBQUE7RUFDekIsTUFBTUMsT0FBTyxJQUFBUCxjQUFBLEdBQUFFLENBQUEsT0FBR00sT0FBTyxDQUFDLHNDQUFzQyxDQUFDO0VBRS9ELE1BQU1DLE1BQU0sSUFBQVQsY0FBQSxHQUFBRSxDQUFBLE9BQUdNLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7O0VBRTFDO0VBQUFWLGNBQUEsR0FBQUUsQ0FBQTtFQUNBTyxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDOztFQUVoQztFQUFBWixjQUFBLEdBQUFFLENBQUE7RUFDQU8sTUFBTSxDQUFDSSxHQUFHLENBQUMsR0FBRyxFQUFFTixPQUFPLENBQUNPLE9BQU8sQ0FBQzs7RUFFaEM7RUFBQWQsY0FBQSxHQUFBRSxDQUFBO0VBQ0FPLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLFlBQVksRUFBRU4sT0FBTyxDQUFDUSxnQkFBZ0IsQ0FBQzs7RUFFbEQ7RUFBQWYsY0FBQSxHQUFBRSxDQUFBO0VBQ0FPLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLE1BQU0sRUFBRU4sT0FBTyxDQUFDUyxPQUFPLENBQUM7O0VBRW5DOztFQUVBO0VBQUFoQixjQUFBLEdBQUFFLENBQUE7RUFDQU8sTUFBTSxDQUFDUSxHQUFHLENBQUMsTUFBTSxFQUFFVixPQUFPLENBQUNXLE1BQU0sQ0FBQzs7RUFFbEM7RUFBQWxCLGNBQUEsR0FBQUUsQ0FBQTtFQUNBTyxNQUFNLENBQUNVLE1BQU0sQ0FBQyxNQUFNLEVBQUVaLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDOztFQUVyQztFQUFBbkIsY0FBQSxHQUFBRSxDQUFBO0VBQ0FPLE1BQU0sQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRVosT0FBTyxDQUFDYSxTQUFTLENBQUM7O0VBRXJDO0VBQ0E7RUFBQXBCLGNBQUEsR0FBQUUsQ0FBQTtFQUVBRyxHQUFHLENBQUNnQixHQUFHLENBQUMsY0FBYyxFQUFFWixNQUFNLENBQUM7QUFDaEMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==