
import { regex } from '../utils.js'

/**
 * @see https://github.com/SassDoc/sassdoc/blob/b3495a39588f7e5a091f1073ca40a75fd941867d/src/annotation/annotations/group.js
 * @see https://github.com/SassDoc/sassdoc/blob/b3495a39588f7e5a091f1073ca40a75fd941867d/src/annotation/annotations/example.js
 */
export default function(options, info) {
  return function group () {
    return {
      name: 'group',
      parse(text) {
        const lines = text.trim().split('\n');
        const slugLineMatches = regex.splitDash.exec(lines[0]);
        const slug = slugLineMatches[1].trim().toLowerCase();

        if (slugLineMatches[2].length) {
          info.groupDisplayNames[slug] = slugLineMatches[2];
        }
        const description = lines.splice(1).join('\n').trim();
        if (description) {
          info.groupDescriptions[slug] = description;
        }
        return [slug]
      },
      default () {
        return [ options.undefinedGroupName ]
      },
      multiple: false,
    }
  }
}
