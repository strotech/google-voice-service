var webdriver=require('selenium-webdriver'),
        By=webdriver.By,
        Capabilities=webdriver.Capabilities,
        Builder=webdriver.Builder,
        Key=webdriver.Key,
        until=webdriver.until;

console.log('hiiii22222222222');
async function main(){
let driver = await new Builder().
   usingServer('http://127.0.0.1:4444/wd/hub').
//   withCapabilities({'browserName': 'firefox'}).
   withCapabilities(Capabilities.chrome()).
   build();


await driver.get('http://www.google.com')
const element = await driver.findElement(By.name('q'))

await element.sendKeys('webdriver', Key.RETURN)
await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
await driver.quit()
}
main();
console.log('done');