function cov_27wnc3pw38() {
  var path = "C:\\Users\\paulm\\Code Institute\\CodeInstitute-MilestoneProject2-BicepMusicFanSite\\assets\\js\\sendEmail.js";
  var hash = "dd03e5ea9931e6f47033b4364a844327f9aef90a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\paulm\\Code Institute\\CodeInstitute-MilestoneProject2-BicepMusicFanSite\\assets\\js\\sendEmail.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 47
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 18,
          column: 6
        }
      },
      "2": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 48
        }
      },
      "3": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 41
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 17
        }
      },
      "5": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "sendMail",
        decl: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 17
          }
        },
        loc: {
          start: {
            line: 6,
            column: 31
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 9
          }
        },
        loc: {
          start: {
            line: 12,
            column: 28
          },
          end: {
            line: 14,
            column: 9
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 15,
            column: 9
          }
        },
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 17,
            column: 9
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 23,
            column: 36
          }
        },
        loc: {
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 23
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dd03e5ea9931e6f47033b4364a844327f9aef90a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_27wnc3pw38 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_27wnc3pw38();

/**
 * [sendEmail to send email using EmailJS
 * Credit: Code Institute material "Sending Emails Using EmailJS"]
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {
  cov_27wnc3pw38().f[0]++;
  cov_27wnc3pw38().s[0]++;
  emailjs.init("user_wxBAvg07l9uKgfV3nW0x3");
  cov_27wnc3pw38().s[1]++;
  emailjs.send("gmail", "bicep", {
    "from_name": contactForm.full_name.value,
    "from_email": contactForm.email_address.value
  }).then(function (response) {
    cov_27wnc3pw38().f[1]++;
    cov_27wnc3pw38().s[2]++;
    console.log("Email sent", response);
  }, function (error) {
    cov_27wnc3pw38().f[2]++;
    cov_27wnc3pw38().s[3]++;
    console.log("FAILED", error);
  });
  cov_27wnc3pw38().s[4]++;
  return false; // To block from loading a new page
} // When the modal form has been submitted, hide the modal


cov_27wnc3pw38().s[5]++;
$("#mailinglistform").on("submit", function () {
  cov_27wnc3pw38().f[3]++;
  cov_27wnc3pw38().s[6]++;
  $("#mailingListModal").modal("hide");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRFbWFpbC5qcyJdLCJuYW1lcyI6WyJzZW5kTWFpbCIsImNvbnRhY3RGb3JtIiwiZW1haWxqcyIsImluaXQiLCJzZW5kIiwiZnVsbF9uYW1lIiwidmFsdWUiLCJlbWFpbF9hZGRyZXNzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiJCIsIm9uIiwibW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUFBO0FBQUE7QUFDM0JDLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLDRCQUFiO0FBRDJCO0FBRTNCRCxFQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCO0FBQzNCLGlCQUFhSCxXQUFXLENBQUNJLFNBQVosQ0FBc0JDLEtBRFI7QUFFM0Isa0JBQWNMLFdBQVcsQ0FBQ00sYUFBWixDQUEwQkQ7QUFGYixHQUEvQixFQUdHRSxJQUhILENBSUksVUFBVUMsUUFBVixFQUFvQjtBQUFBO0FBQUE7QUFDaEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFFBQTFCO0FBQ0gsR0FOTCxFQU9JLFVBQVVHLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQ2JGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JDLEtBQXRCO0FBQ0gsR0FUTDtBQUYyQjtBQWEzQixTQUFPLEtBQVAsQ0FiMkIsQ0FhWjtBQUNsQixDLENBRUQ7Ozs7QUFDQUMsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLEVBQXRCLENBQXlCLFFBQXpCLEVBQW1DLFlBQVk7QUFBQTtBQUFBO0FBQzNDRCxFQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkUsS0FBdkIsQ0FBNkIsTUFBN0I7QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFtzZW5kRW1haWwgdG8gc2VuZCBlbWFpbCB1c2luZyBFbWFpbEpTXHJcbiAqIENyZWRpdDogQ29kZSBJbnN0aXR1dGUgbWF0ZXJpYWwgXCJTZW5kaW5nIEVtYWlscyBVc2luZyBFbWFpbEpTXCJdXHJcbiAqIEBwYXJhbSBjb250YWN0Rm9ybSBbVGhlIGNvbnRhY3QgZm9ybSBvYmplY3RdXHJcbiAqL1xyXG5mdW5jdGlvbiBzZW5kTWFpbChjb250YWN0Rm9ybSkge1xyXG4gICAgZW1haWxqcy5pbml0KFwidXNlcl93eEJBdmcwN2w5dUtnZlYzblcweDNcIik7XHJcbiAgICBlbWFpbGpzLnNlbmQoXCJnbWFpbFwiLCBcImJpY2VwXCIsIHtcclxuICAgICAgICBcImZyb21fbmFtZVwiOiBjb250YWN0Rm9ybS5mdWxsX25hbWUudmFsdWUsXHJcbiAgICAgICAgXCJmcm9tX2VtYWlsXCI6IGNvbnRhY3RGb3JtLmVtYWlsX2FkZHJlc3MudmFsdWVcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRURcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZmFsc2U7ICAvLyBUbyBibG9jayBmcm9tIGxvYWRpbmcgYSBuZXcgcGFnZVxyXG59XHJcblxyXG4vLyBXaGVuIHRoZSBtb2RhbCBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZCwgaGlkZSB0aGUgbW9kYWxcclxuJChcIiNtYWlsaW5nbGlzdGZvcm1cIikub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNtYWlsaW5nTGlzdE1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxufSk7Il19