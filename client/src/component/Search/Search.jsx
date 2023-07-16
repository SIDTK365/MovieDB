import React, { useState } from 'react'
import Card from '../Card/Card'
import Error from '../Error/Error'

function Search({searchResults, showComponentB, toggleState}) {
    return (
        <>
            <div>
                <div>
                    {searchResults.length === 0 ? (
                        <Error showComponentB={showComponentB} toggleState={toggleState}/>
                    ) : (
                        <Card searchResults={searchResults} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Search