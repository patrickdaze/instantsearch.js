/* eslint-disable import/default */

import { storiesOf } from 'dev-novel';
import instantsearch from '../../../../index';
import { wrapWithHits } from '../../utils/wrap-with-hits';

const stories = storiesOf('RatingMenu');

export default () => {
<<<<<<< HEAD:dev/app/builtin/stories/star-rating.stories.js
  stories.add(
    'default',
    wrapWithHits(container => {
      window.search.addWidget(
        instantsearch.widgets.starRating({
          container,
          attribute: 'rating',
          max: 5,
          labels: {
            andUp: '& Up',
          },
          templates: {
            header: 'Rating',
          },
        })
      );
    })
  );
=======
  stories
    .add(
      'default',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.ratingMenu({
            container,
            attribute: 'rating',
            max: 5,
            labels: {
              andUp: '& Up',
            },
          })
        );
      })
    )
    .add(
      'with disabled item',
      wrapWithHits(container => {
        window.search.addWidget(
          instantsearch.widgets.ratingMenu({
            container,
            attribute: 'rating',
            max: 7,
            labels: {
              andUp: '& Up',
            },
          })
        );
      })
    );
>>>>>>> feat(rating-menu): rename widget:dev/app/builtin/stories/rating-menu.stories.js
};
