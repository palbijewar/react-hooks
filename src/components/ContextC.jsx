import React from 'react';
import { userContext, channelContext } from '../App';

export default function ContextC() {
  return (
    <div>
      <userContext.Consumer>
        {user => (
          <channelContext.Consumer>
            {channel => (
              <div>User context value {user}, channel context value {channel}</div>
            )}
          </channelContext.Consumer>
        )}
      </userContext.Consumer>
    </div>
  );
}
