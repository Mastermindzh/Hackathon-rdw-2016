var accounts;
var account;
var j =0;
function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = Car.deployed();


  document.write('[');
  meta.getAmountOfCars.call({from: account}).then(function(amountOfCars) {
    for(var i = 0; i<amountOfCars; i++) {
      meta.getCarName.call(i, {from: account}).then(function (carName) {
        meta.getCarType.call(i, {from: account}).then(function (carType) {
          meta.getCarManufacturer.call(i, {from: account}).then(function (carManufacturer) {
            meta.getManufacturationDate.call(i, {from: account}).then(function (manufacturationDate) {
              document.write(JSON.stringify({
                "name": carName.valueOf(),
                "type": carType.valueOf(),
                "manufacturer": carManufacturer.valueOf(),
                "manufacturation_date": manufacturationDate.valueOf()
              }));
              if(j == amountOfCars-1){
                document.write(']');
              } else {
                document.write(',');
              }
              j++;
            })
          })
        })
      })
    }
  })

  //meta.toString.call({from: account}).then(function(amountOfCars) {
  //  document.write(amountOfCars);
};

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function getJSONPleaseWork(web3){
  account = '0x61f6cfb8520df3805c0d385de8b71741dca0cc9f';

  refreshBalance();
  /*web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert(err);
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshBalance();
  });*/
}
