import React, { useState } from "react";
import HistoryPart from "./HistoryPart";
import LeftSideInfo from "./LeftSideInfo";
import MainPartInfo from "./MainPartInfo";
import style from './PersonalInfo.module.css';

function PersonalInfo({bool}) {

    const [account, setAccount] = useState(bool);

    return(
        <div style={{padding: '100px 200px', background: '#f8f4f4'}} className={style.row}>
            <LeftSideInfo account={account} setAccount={setAccount}/>
            {account ? <MainPartInfo /> : <HistoryPart />}
        </div>
    );
}

export default PersonalInfo;