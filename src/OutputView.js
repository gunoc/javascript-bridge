const MissionUtils = require("@woowacourse/mission-utils");
const { SIGN, MESSAGE, BRACKET } = require("./constant");
const Controller = require("./Controller");

// 얘는 뷰
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  nowArray: [],
  resultArray: "",

  start() {
    MissionUtils.Console.print(MESSAGE.gameStart);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(arrayState) {
    this.nowArray.push(arrayState[0]);
    this.nowArray.push(arrayState[1]);
    const upSide = arrayState[0].join(" | ");
    const upSideResult = `[ ${upSide} ]`;
    const downSide = arrayState[1].join(" | ");
    const downSideResult = `[ ${downSide} ]`;
    this.resultArray = `${upSideResult}\n${downSideResult}\n`;
    return MissionUtils.Console.print(`${upSideResult}\n${downSideResult}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(totalTry, gameResult) {
    MissionUtils.Console.print(
      `${MESSAGE.result}\n${this.resultArray}\n\n${
        MESSAGE.checkResult + gameResult
      }\n${MESSAGE.countTry + totalTry}`
    );
    MissionUtils.Console.close();
  },
};
// MissionUtils.Console.print(OutputView.playerArrPrint())
module.exports = OutputView;
