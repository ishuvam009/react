// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function Test(){

//     return (
//     <>
//         <Stack spacing={2} direction="row">
//             <Button variant="contained">Contained</Button>
//         </Stack>
//     </>
//     )
// }

import React from 'react';

export default function Test() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
      }}>
        Contained
      </button>
    </div>
  );
}

