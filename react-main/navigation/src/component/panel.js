import classNames from 'classnames'

function Panel({children, className, ...rest}){
    const finalClass = classNames('border rounded p-3 shadow bg-white w-full', className)

    return (
    <div {...rest} className={finalClass}>
        {children}
    </div>)
    

}

export default Panel