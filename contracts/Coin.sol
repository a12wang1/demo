pragma solidity ^0.4.22;

contract Coin {

    address public owner;
    address public admin;
    
    // Public variables of the token
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    
    uint256 public ProductId;
	uint public ProductNum;
	string public ProductPrice;
	address public UserId;
    
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* Initializes contract with initial supply tokens to the creator of the contract */
    constructor() public {
        
        owner = msg.sender;
        admin = msg.sender;
        
        name = 'REN MIN BI COIN';
        symbol = 'RMBC';
        decimals = 2;
        
        uint256 initialSupply = 10000000000;
        balanceOf[owner] = initialSupply;              // Give the creator all initial tokens
        totalSupply = initialSupply;
    }
    
    /* Send coins */
    
   function transfer(address _to, uint256 _value) public  {
        
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
    }
    
    function Purchase(address _to, uint256 _value,  uint256 id,uint256 num, string price) public {
    	ProductId = id;
     	ProductNum=num;
     	ProductPrice= price;
     	UserId = msg.sender;
     	transfer(_to, _value);
    }
    
    function getMessage() public view returns (address){
    	return(UserId);
    }
}