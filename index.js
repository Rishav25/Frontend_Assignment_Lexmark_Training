var toggle = new Array(9).fill(false);

function handleSmall(id) {
  if (toggle[id] === false) {
    document.getElementById(`smallTestTube${id}`).style.backgroundColor =
      "#77CCFF";
    document.getElementById(`smallTestTube${id}`).style.color = `#0066FF`;
    toggle[id] = true;
  } else if (toggle[id] === true) {
    document.getElementById(`smallTestTube${id}`).style.backgroundColor =
      "#F0F8FF";
    document.getElementById(`smallTestTube${id}`).style.color = `#0066FF`;
    toggle[id] = false;
  }

  var numberOfGlasses = 0;
  for (var i = 1; i <= 8; i++) {
    if (toggle[i] === true) {
      numberOfGlasses++;
    }
  }

  var height = 20 * (numberOfGlasses / 8);
  var emptyHeight = 20 - height;
  var percent = ((height / 20) * 100).toFixed(1);
  var remaining = (2 - (percent * 2) / 100).toFixed(2);

  var testTube = document.getElementById("bigTestTube");
  testTube.remove();
  var bigTestTubeDiv = document.getElementById("bigTestTubeDiv");
  if (height > 0 && percent < 100) {
    bigTestTubeDiv.innerHTML = `<div id="bigTestTube">
  <div id="emptyPortion" style="height:${emptyHeight}rem;background-color:#F0F8FF;border-radius:0 0 3rem 3rem">
    <div id="text1">
        <h4>${remaining}L</h4>
        <h6>Remaining</h6>
    </div>
        </div>
            <div id="filledPortion" style="background-color:#77CCFF;height:${
              height + 1
            }rem;border-radius:0 0 3rem 3rem;color:#0066FF">
                <div id="text3" style="height:${height / 2}rem">
                    <h4>${percent}%<h4>
            </div>
    </div>
    </div>`;
  } else if (height === 0) {
    bigTestTubeDiv.innerHTML = `
    <div id="bigTestTube">
      <div id="emptyPortion" style="height:${emptyHeight}rem;background-color:#F0F8FF;border-radius:0 0 3rem 3rem">
        <div id="text1">
          <h4>${remaining}L</h4>
          <h6>Remaining</h6>
        </div>
      </div>
    <div id="filledPortion" style="height:${0}rem;border-radius:0 0 3rem 3rem;color:#0066FF">
        <div id="text3" style="height:${0}rem">
            <h4><h4>
        </div>
    </div>`;
  }
  if (height === 20) {
    console.log("Activated");
    bigTestTubeDiv.innerHTML = `
    <div id="bigTestTube">
      <div id="filledPortion" style="background-color:#77CCFF;height:${
        height + 1
      }rem;border-radius:0 0 3rem 3rem;color:#0066FF">
        <div id="text3" style="height:${height / 2}rem">
            <h4>${percent}%</h4>
            <h4>Goal Achieved</h4>
        </div>
      </div>
    </div>
    `;
  }
}
