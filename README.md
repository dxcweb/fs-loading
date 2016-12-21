# fs-loading
react版本loading函数,通过loading.show()和loading.hide()来控制loading的显示和隐藏
## install

```
npm install fs-loading --save
```
## Development

```
npm install
npm start
```
## Example
[http://github.dxcweb.com/fs-loading/](http://github.dxcweb.com/fs-loading/ "http://github.dxcweb.com/fs-loading/")

## Usage
    import loading from 'fs-loading
    loading.show()
    loading.hide()
    或者
    import {Loading} from 'fs-loading'
    <Loading isShow={this.state.show}/>
## API
    loading.show(title,options)
###options
    options={
        ratio:1
    }