//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenHelper {
    struct TokenInfo {
        uint256 balance;
        uint256 allowance;
    }

    function _isContract(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    function _getAllowance(address _token, address _user, address _spender) internal view returns (uint256) {
        (bool success, bytes memory returnedData) = _token.staticcall(abi.encodeWithSelector(IERC20.allowance.selector, _user, _spender));
        if (success) {
            return abi.decode(returnedData, (uint256));
        }

        return 0;
    }

    function _getBalance(address _token, address _user) internal view returns (uint256) {
        (bool success, bytes memory returnedData) = _token.staticcall(abi.encodeWithSelector(IERC20.balanceOf.selector, _user));
        if (success) {
            return abi.decode(returnedData, (uint256));
        }

        return 0;
    }

    function batchTokenInfo(address _user, address[] calldata _tokens, address _spender) public view returns (TokenInfo[] memory tokensInfo) {
        require(_tokens.length <= 200, "Over the limit");
        tokensInfo = new TokenInfo[](_tokens.length);
        for (uint i = 0; i < _tokens.length; i++) {
            address token = _tokens[i];

            // native currency case
            if (token == address(0x0)) {
                tokensInfo[i] = TokenInfo({ balance: _user.balance, allowance: 0 });
                continue;
            }

            if (!_isContract(token)) {
                tokensInfo[i] = TokenInfo({ balance: 0, allowance: 0 });
                continue;
            }

            uint256 balance = _getBalance(token, _user);
            uint256 allowance = _getAllowance(token, _user, _spender);
            tokensInfo[i] = TokenInfo({ balance: balance, allowance: allowance });
        }
    }
}
