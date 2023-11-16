import React from "react"
import Store from "./Store"

function StoreList({setStores, stores}) {


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                <Store
                stores = {stores}
                setStores ={setStores}
                />
            </tbody>
        
        </table>
    );
}

export default StoreList;