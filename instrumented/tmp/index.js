function cov_ykajk4j73() {
  var path = "/Users/unknown1/Codex/github/common-project-back-front/src/tmp/index.js";
  var hash = "240589e129cb3762c00a7fb1857fcc8d9d74b208";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/unknown1/Codex/github/common-project-back-front/src/tmp/index.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 2,
          column: 69
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 69
        }
      },
      "2": {
        start: {
          line: 3,
          column: 37
        },
        end: {
          line: 3,
          column: 67
        }
      },
      "3": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 54
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 54
        }
      },
      "5": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 53
        }
      },
      "6": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 16,
          column: 65
        }
      },
      "7": {
        start: {
          line: 17,
          column: 22
        },
        end: {
          line: 17,
          column: 61
        }
      },
      "8": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      },
      "9": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "showContent",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 3,
            column: 67
          }
        },
        line: 3
      },
      "2": {
        name: "showPopup",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 18
          }
        },
        loc: {
          start: {
            line: 7,
            column: 23
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      "3": {
        name: "hidePopup",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 18
          }
        },
        loc: {
          start: {
            line: 11,
            column: 23
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      },
      "4": {
        name: "addModule",
        decl: {
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 18
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 15
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "240589e129cb3762c00a7fb1857fcc8d9d74b208"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ykajk4j73 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ykajk4j73();
function showContent(id) {
  cov_ykajk4j73().f[0]++;
  const contentElements = (cov_ykajk4j73().s[0]++, document.querySelectorAll('.content > div'));
  cov_ykajk4j73().s[1]++;
  contentElements.forEach(element => {
    cov_ykajk4j73().f[1]++;
    cov_ykajk4j73().s[2]++;
    return element.style.display = 'none';
  });
  cov_ykajk4j73().s[3]++;
  document.getElementById(id).style.display = 'block';
}
function showPopup(id) {
  cov_ykajk4j73().f[2]++;
  cov_ykajk4j73().s[4]++;
  document.getElementById(id).style.display = 'block';
}
function hidePopup(id) {
  cov_ykajk4j73().f[3]++;
  cov_ykajk4j73().s[5]++;
  document.getElementById(id).style.display = 'none';
}
function addModule() {
  cov_ykajk4j73().f[4]++;
  const moduleName = (cov_ykajk4j73().s[6]++, document.getElementById('module-name').value);
  const homeContent = (cov_ykajk4j73().s[7]++, document.querySelector('.main-content'));
  cov_ykajk4j73().s[8]++;
  homeContent.innerHTML += `
      <div class="main-content-container">
        <div class="projects-container">
          <h2>${moduleName}</h2>
          <div class="projects-cards-container">
            <div class="card">
            </div>
          </div>
        </div>
      </div>
  `;
  cov_ykajk4j73().s[9]++;
  hidePopup('add-module');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfeWthams0ajczIiwiYWN0dWFsQ292ZXJhZ2UiLCJzaG93Q29udGVudCIsImlkIiwiZiIsImNvbnRlbnRFbGVtZW50cyIsInMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRCeUlkIiwic2hvd1BvcHVwIiwiaGlkZVBvcHVwIiwiYWRkTW9kdWxlIiwibW9kdWxlTmFtZSIsInZhbHVlIiwiaG9tZUNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2hvd0NvbnRlbnQoaWQpIHtcbiAgY29uc3QgY29udGVudEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQgPiBkaXYnKTtcbiAgY29udGVudEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIHNob3dQb3B1cChpZCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVQb3B1cChpZCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gYWRkTW9kdWxlKCkge1xuICBjb25zdCBtb2R1bGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZHVsZS1uYW1lJykudmFsdWU7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICBob21lQ29udGVudC5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMj4ke21vZHVsZU5hbWV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGA7XG4gIGhpZGVQb3B1cCgnYWRkLW1vZHVsZScpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsV0FBV0EsQ0FBQ0MsRUFBRSxFQUFFO0VBQUFILGFBQUEsR0FBQUksQ0FBQTtFQUN2QixNQUFNQyxlQUFlLElBQUFMLGFBQUEsR0FBQU0sQ0FBQSxPQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0VBQUNSLGFBQUEsR0FBQU0sQ0FBQTtFQUNwRUQsZUFBZSxDQUFDSSxPQUFPLENBQUNDLE9BQU8sSUFBSTtJQUFBVixhQUFBLEdBQUFJLENBQUE7SUFBQUosYUFBQSxHQUFBTSxDQUFBO0lBQUEsT0FBQUksT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQUQsQ0FBQyxDQUFDO0VBQUNaLGFBQUEsR0FBQU0sQ0FBQTtFQUNuRUMsUUFBUSxDQUFDTSxjQUFjLENBQUNWLEVBQUUsQ0FBQyxDQUFDUSxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0FBQ3JEO0FBRUEsU0FBU0UsU0FBU0EsQ0FBQ1gsRUFBRSxFQUFFO0VBQUFILGFBQUEsR0FBQUksQ0FBQTtFQUFBSixhQUFBLEdBQUFNLENBQUE7RUFDckJDLFFBQVEsQ0FBQ00sY0FBYyxDQUFDVixFQUFFLENBQUMsQ0FBQ1EsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztBQUNyRDtBQUVBLFNBQVNHLFNBQVNBLENBQUNaLEVBQUUsRUFBRTtFQUFBSCxhQUFBLEdBQUFJLENBQUE7RUFBQUosYUFBQSxHQUFBTSxDQUFBO0VBQ3JCQyxRQUFRLENBQUNNLGNBQWMsQ0FBQ1YsRUFBRSxDQUFDLENBQUNRLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07QUFDcEQ7QUFFQSxTQUFTSSxTQUFTQSxDQUFBLEVBQUc7RUFBQWhCLGFBQUEsR0FBQUksQ0FBQTtFQUNuQixNQUFNYSxVQUFVLElBQUFqQixhQUFBLEdBQUFNLENBQUEsT0FBR0MsUUFBUSxDQUFDTSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNLLEtBQUs7RUFDL0QsTUFBTUMsV0FBVyxJQUFBbkIsYUFBQSxHQUFBTSxDQUFBLE9BQUdDLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUFDcEIsYUFBQSxHQUFBTSxDQUFBO0VBQzVEYSxXQUFXLENBQUNFLFNBQVMsSUFBSTtBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCSixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7RUFBQ2pCLGFBQUEsR0FBQU0sQ0FBQTtFQUNGUyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQ3pCIiwiaWdub3JlTGlzdCI6W119