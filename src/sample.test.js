const { Builder, By, Capabilities } = require("selenium-webdriver");
const fs = require('fs');



// Defina as configurações de dispositivos que você deseja testar

describe("Print Screen", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  })
  
  test("click", async () => {
    await driver.get("https://mobile-app1-gtp106.installprogram.eu/htmlGames/3.47.1/launch/payoutTime_INOGames_3_0_4_19/mgs/payoutTime?displayName=Payout+Time!%e2%84%a2&moduleId=100999&clientId=40300&gamePath=/mgs/payoutTime&clientTypeId=40&gameId=payoutTime&languageCode=en&productId=5007&market=dotcom&brand=islandparadise&loginType=InterimUPE&returnUrl=https://mobile-app1-gtp106.installprogram.eu/lobby/en/IslandParadise/games/&routerEndPoints=&currencyFormat=&isPracticePlay=False&username=lucas&password=test1234$&formFactor=mobile");
   
    

    const gameCanvas = await driver.findElement(By.id("GameCanvas"));

    await driver.sleep(14000);

    await gameCanvas.click();

    const xPixel = 100 ; // Substitua pelo valor X em pixels
    const yPixel = 100; // Substitua pelo valor Y em pixels

    // Realize o clique nas coordenadas especificadas
    await driver.actions().move({ x: xPixel, y: yPixel }).click().perform();
    
    // Esperar por 3 segundos
    await driver.sleep(3000); 

    // Tirar uma captura de tela e salvar em um arquivo
    const screenshot = await driver.takeScreenshot();

    // Definindo um nome para os arquivos
    const screenshotFileName = 'teste'

    // Definindo um local para as capturas de tela


    fs.writeFileSync(screenshotFileName, screenshot, 'base64');
    
    
  });
});
