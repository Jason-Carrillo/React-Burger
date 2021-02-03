import React from 'react';

const layout = (props) => (
    <Aux>
        <div>
            Toolbarm SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;