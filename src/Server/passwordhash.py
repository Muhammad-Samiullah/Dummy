import hashlib
import base64
def hash(str):
    str = str.encode()
    result = hashlib.md5(str)
    return base64.b64encode(result.digest())