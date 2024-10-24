import * as _fse from "fs-extra";
import * as _path from "path";
const url = "../../src/js";
export class Build {
    exec() {
        const jsUrl = _path.join(__dirname, url);
        if (_fse.existsSync(jsUrl)) {
            _fse.rmSync(jsUrl, { recursive: true });
        }
        _fse.ensureDirSync(jsUrl);
    }
}

new Build().exec();