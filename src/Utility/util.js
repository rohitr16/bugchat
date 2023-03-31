export function dialogueEngine(stateRef) {
    const answersBasic = [
      'can you elaborate?',
      'and why do you believe that is so?',
      'can you be more specific?',
      'what would be your guess?',
      'I need more details for this one',
    ];
    const answersAdvanced = [
      'have you check the logs?',
      'have you tried restarting?',
      'what does the documentation say?',
      'Maybe its a typo',
    ];
    const answersAdjust = [
      'you need to be a bit more specific',
      'come on I am trying to help',
      'whatever',
      'that does not sound like a bug',
    ];

    let response;

    if (stateRef.current.disposable.length <= 7) {
      response =
        answersAdjust[Math.floor(Math.random() * answersAdjust.length)];

    } else if (
      stateRef.current.history.length <= 3 &&
      stateRef.current.disposable.length > 6
    ) {
      response =
        answersBasic[Math.floor(Math.random() * answersBasic.length)];
    } else if (stateRef.current.history.length >= 4) {
      response =
        answersAdvanced[Math.floor(Math.random() * answersAdvanced.length)];
    }

    return response;
  }