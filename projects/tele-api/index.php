<?php

/**
 * php -S localhost:9001
 */
// TODO: cache the websites

if (!isset($_GET["url"])) {
  http_response_code(400);
  die();
}

$user_url = htmlspecialchars($_GET["url"]);

function is_valid_url(): bool {
  global $user_url;

  $valid_sites = array(
    // https://yle.fi/tekstitv/txt/{}_{:04}.htm
    "/^https:\/\/yle\.fi\/tekstitv\/txt\/[0-9]{3}_[0-9]{3}[1-9]\.htm$/m",
    // https://yle.fi/aihe/yle-ttv/json?P={}_{:04}
    "/^https:\/\/yle\.fi\/aihe\/yle-ttv\/json\?P=[0-9]{3}_[0-9]{3}[1-9]$/m"
  );

  foreach ($valid_sites as $site) {
    if (preg_match_all($site, $user_url) === 1) {
      return true;
    }
  }

  return false;
}

if (!is_valid_url()) {
  http_response_code(400);
  die();
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: X-Requested-With");

// Yle has becoming picky about headers so fake curl headers
$opts = [
  "http" => [
      "method" => "GET",
      "header" => "Host: yle.fi\r\n" .
                  "user-agent: curl/7.81.0\r\n" .
                  "accept: */*\r\n"
  ]
];

// DOCS: https://www.php.net/manual/en/function.stream-context-create.php
$context = stream_context_create($opts);

echo file_get_contents($user_url, false, $context);
