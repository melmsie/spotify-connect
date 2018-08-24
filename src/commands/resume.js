const { spotifyOAuth } = require('@sc/rest');
const { LinkedCommand } = require('@sc/models');

module.exports = class ResumeCommand extends LinkedCommand {
  constructor (main) {
    super(main, {
      descriptions: 'Resumes playing the currently paused song.',
      triggers: [ 'resume', 'r' ],
      requiresPlayer: true
    });
  }

  async execute (link, player) {
    if (player.is_playing) {
      return 'You\'re already playing something. Use the `pause` command to pause.';
    }

    await spotifyOAuth.resume(link);

    return 'Resumed successfully. Use the `pause` command to pause.';
  }
};
