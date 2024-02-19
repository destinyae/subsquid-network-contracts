// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "./BaseTest.sol";
import "../src/SoftCap.sol";

contract SoftCapTest is BaseTest {
  Router router;
  SoftCap cap;
  uint256 bond;

  function setUp() public {
    (, router) = deployAll();
    cap = new SoftCap(router);
    bond = router.networkController().bondAmount();
  }

  function test_Cap() public {
    for (uint256 i = 0; i <= 100; i++) {
      UD60x18 x = ud(i * 0.01e18);
      UD60x18 y = cap.cap(x) * ud(1e20);
      // delta due to excel precision
      assertApproxEqAbs(y.unwrap(), precalculated[uint256(i)], 100_000);
    }
  }

  function test_CapedStake() public {
    assertCapAroundFraction(0, 0);
    assertCapAroundFraction(bond / 10, 9); // 1/11 ~= 9/100
    assertCapAroundFraction(bond / 2, 33); // 1/3 ~= 33/100
    assertCapAroundFraction(bond, 50);
    assertCapAroundFraction(bond * 2, 66); // 2/3 ~= 66/100
    assertCapAroundFraction(bond * 10, 100);
    assertCapAroundFraction(bond * 100000, 100);
  }

  function assertCapAroundFraction(uint256 mockStake, uint256 fraction) internal {
    uint256[] memory workers = new uint256[](1);
    vm.mockCall(
      address(router.staking()), abi.encodeWithSelector(IStaking.activeStake.selector, workers), abi.encode(mockStake)
    );
    assertApproxEqRel(cap.capedStake(0), bond * precalculated[fraction] / 1e20, 1e16);
  }

  // precalculated in excel
  uint256[101] precalculated = [
    0,
    1073683790892470000,
    2131842820793010000,
    3173887134792180000,
    4199263980967850000,
    5207458056380590000,
    6197991635953580000,
    7170424588491440000,
    8124354284395630000,
    9059415399897710000,
    9975279622854080000,
    10871655265330100000,
    11748286788346900000,
    12604954244273900000,
    13441472642425300000,
    14257691243459700000,
    15053492788193400000,
    15828792666418500000,
    16583538031272800000,
    17317706864633900000,
    18031306998920900000,
    18724375100566500000,
    19396975620292700000,
    20049199715168200000,
    20681164147263500000,
    21293010163537500000,
    21884902361399900000,
    22457027544197000000,
    23009593570656600000,
    23542828202119800000,
    24056977951167900000,
    24552306935031900000,
    25029095736953400000,
    25487640278442200000,
    25928250705155600000,
    26351250288907200000,
    26756974348096100000,
    27145769188638500000,
    27517991067274200000,
    27874005178923700000,
    28214184669571900000,
    28538909675971800000,
    28848566393276100000,
    29143546171533600000,
    29424244641821800000,
    29691060872628300000,
    29944396556944300000,
    30184655230395400000,
    30412241520597000000,
    30627560427802000000,
    30831016636791400000,
    31023013859847900000,
    31203954210557600000,
    31374237608090300000,
    31534261211524400000,
    31684418883710500000,
    31825100684093300000,
    31956692389854000000,
    32079575044678500000,
    32194124534408400000,
    32300711188790900000,
    32399699408505300000,
    32491447316616500000,
    32576306433577400000,
    32654621374885500000,
    32726729570480900000,
    32792961004964300000,
    32853637977705500000,
    32909074881912200000,
    32959578001728200000,
    33005445326435600000,
    33046966380841900000,
    33084422070946600000,
    33118084543989900000,
    33148217062006400000,
    33175073888021600000,
    33198900184049300000,
    33219931920070200000,
    33238395793194200000,
    33254509156232600000,
    33268479954936300000,
    33280506673175700000,
    33290778285374700000,
    33299474215532600000,
    33306764302200700000,
    33312808768812400000,
    33317758198790300000,
    33321753514893400000,
    33324925962290900000,
    33327397094887100000,
    33329278764452100000,
    33330673112143600000,
    33331672562041500000,
    33332359816347500000,
    33332807851933900000,
    33333079917961900000,
    33333229534319500000,
    33333300490665000000,
    33333326845891800000,
    33333332927868200000,
    33333333333333300000
  ];
}