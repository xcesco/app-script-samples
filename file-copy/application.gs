 // The Browser API key obtained from the Google API Console.
  // Replace with your own Browser API key, or your own key.
  var developerKey = "AIzaSyCN0nxgdqd-k0VXCYTNBVio5gpxuQ3hcoo";                        

  // The Client ID obtained from the Google API Console. Replace with your own Client ID.
  var clientId = "838218845782-tecqv9mebfeu7qj60drhfk15mmmua63s.apps.googleusercontent.com";

  // Replace with your own project number from console.developers.google.com.
  // See "Project number" under "IAM & Admin" > "Settings"
  var appId = "838218845782";

  // Scope to use to access user's Drive items.
  var scope = ['https://www.googleapis.com/auth/drive'];

  var messageTimeOut=5000;

/**
 * Inizializza i parametri dell'applicazione ed avvia il rendering della UI Html. Riferimenti:
 * https://developers.google.com/apps-script/guides/html/best-practices
 */
function doGet() {
  var html=HtmlService.createTemplateFromFile('index.html');
  
  html.developerKey=developerKey;
  html.clientId=clientId;
  html.appId=appId;
  html.scope=scope;
  html.messageTimeOut=messageTimeOut;
  
  return html.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Esegue la copia del file nella cartella di destinazione. La copia viene fatta server-side
 */
function executeCopy(fileId, destinationId) {
  var file=DriveApp.getFileById(fileId);
  var folder=DriveApp.getFolderById(destinationId)
  var fileCopied=file.makeCopy(file.getName(), folder);  
}

/**
 * Serve ad includere altri parti di codice nella pagina principale.
 *
 * Vedi https://developers.google.com/apps-script/guides/html/best-practices
 */
function include(filename) {
  var html=HtmlService.createTemplateFromFile(filename);
  
  html.developerKey=developerKey;
  html.clientId=clientId;
  html.appId=appId;
  html.scope=scope;
  html.messageTimeOut=messageTimeOut;
  
  return html.evaluate().getContent();
}

