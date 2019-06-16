chrome.browserAction.onClicked.addListener(tab =>
  chrome.tabs.captureVisibleTab({ format: "png" }, dataUrl =>
    chrome.downloads.download({
      url: dataUrl,
      filename: tab.title
        .replace(/[^a-z0-9]/gi, "-")
        .replace("--", "-")
        .concat(".png")
    })
  )
)
