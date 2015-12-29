import util from 'util';
import chalk from 'chalk';

export default  {
        json: function(object) {
            var json = util.inspect(object, {
                depth: 3,
                colors: true
            }).trim();

            if (json != '{}' && json != '' && json != 'undefined' && typeof json != 'undefined') {
                process.stdout.write(chalk.white(json) + '\n');
            }
        },

        ok: function(msg) {
            console.log(chalk.green('✓ ') + msg);
        },
        fail: function(msg) {
            console.log(chalk.red('✗ ') + msg);
        }
    }
