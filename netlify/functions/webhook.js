exports.handler = async (event) => {
  // Webhook verification (Meta pings this on setup)
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters;
    if (params['hub.verify_token'] === process.env.VERIFY_TOKEN) {
      return { statusCode: 200, body: params['hub.challenge'] };
    }
    return { statusCode: 403, body: 'Forbidden' };
  }

  // Incoming messages from Messenger
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    const entries = body.entry || [];

    for (const entry of entries) {
      for (const msg of entry.messaging || []) {
        const senderId = msg.sender.id;
        const text = msg.message?.text;
        console.log(`Message from ${senderId}: ${text}`);
        // your order logic goes here
      }
    }

    return { statusCode: 200, body: 'OK' };
  }

  return { statusCode: 405, body: 'Method Not Allowed' };
};
