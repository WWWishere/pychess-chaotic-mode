export const variantsIni = `
# Hybrid variant of Grand-chess and crazyhouse, using Grand-chess as a template
[grandhouse:grand]
startFen = r8r/1nbqkcabn1/pppppppppp/10/10/10/10/PPPPPPPPPP/1NBQKCABN1/R8R[] w - - 0 1
pieceDrops = true
capturesToHand = true

# Hybrid variant of Gothic-chess and crazyhouse, using Capablanca as a template
[gothhouse:capablanca]
startFen = rnbqckabnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNBQCKABNR[] w KQkq - 0 1
pieceDrops = true
capturesToHand = true

# Hybrid variant of Embassy chess and crazyhouse, using Embassy as a template
[embassyhouse:embassy]
startFen = rnbqkcabnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNBQKCABNR[] w KQkq - 0 1
pieceDrops = true
capturesToHand = true

[gorogoroplus:gorogoro]
startFen = sgkgs/5/1ppp1/1PPP1/5/SGKGS[LNln] w 0 1
lance = l
shogiKnight = n
promotedPieceType = l:g n:g

[shogun:crazyhouse]
startFen = rnb+fkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB+FKBNR[] w KQkq - 0 1
commoner = c
centaur = g
archbishop = a
chancellor = m
fers = f
promotionRank = 6
promotionLimit = g:1 a:1 m:1 q:1
promotionPieceTypes = -
promotedPieceType = p:c n:g b:a r:m f:q
mandatoryPawnPromotion = false
firstRankPawnDrops = true
promotionZonePawnDrops = true
whiteDropRegion = *1 *2 *3 *4 *5
blackDropRegion = *4 *5 *6 *7 *8
immobilityIllegal = true

[orda:chess]
centaur = h
knibis = a
kniroo = l
silver = y
promotionPieceTypes = qh
startFen = lhaykahl/8/pppppppp/8/8/8/PPPPPPPP/RNBQKBNR w KQ - 0 1
flagPiece = k
whiteFlag = *8
blackFlag = *1

[synochess:pocketknight]
janggiCannon = c
soldier = s
horse = h
fersAlfil = e
commoner = a
startFen = rneakenr/8/1c4c1/1ss2ss1/8/8/PPPPPPPP/RNBQKBNR[ss] w KQ - 0 1
stalemateValue = loss
perpetualCheckIllegal = true
flyingGeneral = true
blackDropRegion = *5
flagPiece = k
whiteFlag = *8
blackFlag = *1

[shinobi:crazyhouse]
commoner = c
bers = d
archbishop = j
fers = m
shogiKnight = h
lance = l
promotionRank = 7
promotionPieceTypes = -
promotedPieceType = p:c m:b h:n l:r
mandatoryPiecePromotion = true
stalemateValue = loss
nFoldRule = 4
perpetualCheckIllegal = true
startFen = rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/LH1CK1HL[LHMMDJ] w kq - 0 1
capturesToHand = false
whiteDropRegion = *1 *2 *3 *4
immobilityIllegal = true
flagPiece = k
whiteFlag = *8
blackFlag = *1

[ordamirror:chess]
centaur = h
knibis = a
kniroo = l
customPiece1 = f:mQcN
promotionPieceTypes = lhaf
startFen = lhafkahl/8/pppppppp/8/8/PPPPPPPP/8/LHAFKAHL w - - 0 1
flagPiece = k
whiteFlag = *8
blackFlag = *1

[empire:chess]
customPiece1 = e:mQcN
customPiece2 = c:mQcB
customPiece3 = t:mQcR
customPiece4 = d:mQcK
soldier = s
promotionPieceTypes = q
startFen = rnbqkbnr/pppppppp/8/8/8/PPPSSPPP/8/TECDKCET w kq - 0 1
stalemateValue = loss
nFoldValue = loss
flagPiece = k
whiteFlag = *8
blackFlag = *1
flyingGeneral = true

[chak]
maxRank = 9
maxFile = 9
rook = r
knight = v
centaur = j
immobile = o
customPiece1 = s:FvW
customPiece2 = q:pQ
customPiece3 = d:mQ2cQ2
customPiece4 = p:fsmWfceF
customPiece5 = k:WF
customPiece6 = w:FvW
startFen = rvsqkjsvr/4o4/p1p1p1p1p/9/9/9/P1P1P1P1P/4O4/RVSJKQSVR w - - 0 1
mobilityRegionWhiteCustomPiece6 = *5 *6 *7 *8 *9
mobilityRegionWhiteCustomPiece3 = *5 *6 *7 *8 *9
mobilityRegionBlackCustomPiece6 = *1 *2 *3 *4 *5
mobilityRegionBlackCustomPiece3 = *1 *2 *3 *4 *5
promotionRank = 5
promotionPieceTypes = -
mandatoryPiecePromotion = true
promotedPieceType = p:w k:d
extinctionValue = loss
extinctionPieceTypes = kd
extinctionPseudoRoyal = true
flagPiece = d
whiteFlag = e8
blackFlag = e2
nMoveRule = 50
nFoldRule = 3
nFoldValue = draw
stalemateValue = loss

[chennis]
maxRank = 7
maxFile = 7
mobilityRegionWhiteKing = b1 c1 d1 e1 f1 b2 c2 d2 e2 f2 b3 c3 d3 e3 f3 b4 c4 d4 e4 f4
mobilityRegionBlackKing = b4 c4 d4 e4 f4 b5 c5 d5 e5 f5 b6 c6 d6 e6 f6 b7 c7 d7 e7 f7
customPiece1 = p:fmWfceF
cannon = c
commoner = m
fers = f
soldier = s
king = k
bishop = b
knight = n
rook = r
promotionPieceTypes = -
promotedPieceType = p:r f:c s:b m:n
promotionRank = 1
startFen = 1fkm3/1p1s3/7/7/7/3S1P1/3MKF1[] w - 0 1
pieceDrops = true
capturesToHand = true
pieceDemotion = true
mandatoryPiecePromotion = true
dropPromoted = true
castling = false
stalemateValue = loss

[amazon2]
variantTemplate = fairy
maxFile = 8
maxRank = 8
startFen = rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBAKBNR w KQkq - 0 1
pawn = p
knight = n
bishop = b
rook = r
queen = q
amazon = a
king = k
flagPiece = k
promotionPieceTypes = nbrqa
promotionRank = 8

[xxxl]
variantTemplate = fairy
maxFile = 12
maxRank = 10
startFen = qtczuekadgmq/rlihjssjhilr/oppbwffwnppo/3pppppp3/3******3/11Y/3PPPPPP3/OPPBWFFWNPPO/RLIHJSSJHILR/QTCZUEKADGMQ w - - 0 1
chess960 = true
castlingRookPiece = q
castlingKingsideFile = k
castlingQueensideFile = b
castlingKingFile = g
pawn = p
knight = n
bishop = b
rook = r
queen = q
amazon = a
king = k
archbishop = c
fers = f
chancellor = m
wazir = w
commoner = d
centaur = g
alfil = h
customPiece1 = e:RNNB
customPiece2 = i:AD
customPiece3 = j:C
customPiece4 = l:D
customPiece5 = o:mfFcfW
customPiece6 = s:fWfeF
customPiece7 = t:NN
customPiece8 = u:WNFDA
customPiece9 = z:Z
customPiece10 = y:ZRNNHGBDDCAA
customPiece11 = x:FaR
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e o:e s:e
mandatoryPiecePromotion = true
promotionRank = 10

[corridor]
variantTemplate = fairy
maxFile = 4
maxRank = 10
startFen = wfkw/pppp/4/4/4/4/4/4/PPPP/WFKW w - - 0 1
chess960 = true
castlingRookPiece = w
castlingKingsideFile = a
castlingQueensideFile = d
castlingKingFile = c
pawn = p
king = k
fers = f
wazir = w
customPiece1 = e:RNNB
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e
mandatoryPiecePromotion = true
promotionRank = 6

[xlhouse]
variantTemplate = shogi
maxFile = 8
maxRank = 8
startFen = rmjakctr/hbwffwnl/sppoopps/8/8/SPPOOPPS/HBWFFWNL/RMJAKCTR w KQkq - 0 1
pocketSize = 16
pieceDrops = true
capturesToHand = true
firstRankPawnDrops = true
pawn = p
knight = n
bishop = b
rook = r
queen = q
amazon = a
king = k
archbishop = c
fers = f
chancellor = m
wazir = w
commoner = d
centaur = g
alfil = h
customPiece1 = e:RNNB
customPiece2 = i:AD
customPiece3 = j:C
customPiece4 = l:D
customPiece5 = o:mfFcfW
customPiece6 = s:fWfeF
customPiece7 = t:NN
customPiece8 = u:WNFDA
customPiece9 = z:Z
customPiece10 = y:ZRNNHGBDDCAA
customPiece11 = x:FaR
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e
mandatoryPiecePromotion = true
whiteDropRegion = *1 *2 *3 *4 *5 *6 *7
blackDropRegion = *2 *3 *4 *5 *6 *7 *8
capturesToHand = true
promotionRank = 8

[xlstandard]
variantTemplate = fairy
maxFile = 8
maxRank = 8
startFen = rnbqkbnr/acdefghi/jlmopstu/wyz5/WYZ*4/JLMOPSTU/ACDEFGHI/RNBQKBNR w KQkq - 0 1
pawn = p
knight = n
bishop = b
rook = r
queen = q
amazon = a
king = k
archbishop = c
fers = f
chancellor = m
wazir = w
commoner = d
centaur = g
alfil = h
customPiece1 = e:RNNB
customPiece2 = i:AD
customPiece3 = j:C
customPiece4 = l:D
customPiece5 = o:mfFcfW
customPiece6 = s:fWfeF
customPiece7 = t:NN
customPiece8 = u:WNFDA
customPiece9 = z:Z
customPiece10 = y:ZRNNHGBDDCAA
customPiece11 = x:FaR
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e o:e s:e
mandatoryPiecePromotion = true
promotionRank = 8

[river]
variantTemplate = fairy
maxFile = 12
maxRank = 10
startFen = lghidhtargqk/wjzfffflrdhh/pppppj1wwwpp/***4***2/2******1***/5*3*2/5*****2/PPPPPJ*WWWPP/WJZFFFFLRDHH/LGHIDHTARGQK w - - 0 1
chess960 = true
knight = n
bishop = b
rook = r
queen = q
amazon = a
king = k
archbishop = c
fers = f
chancellor = m
wazir = w
commoner = d
centaur = g
customPiece1 = e:RNNB
customPiece2 = i:ADWF
customPiece3 = j:C
customPiece4 = l:DF
customPiece5 = o:mfFcfW
customPiece6 = s:fWfeF
customPiece7 = t:NN
customPiece8 = u:WNFDA
customPiece9 = z:Z
customPiece10 = y:ZRNNHGBDDCAA
customPiece11 = h:WA
customPiece12 = p:mfWmfDcfeF
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e o:e s:e
mandatoryPiecePromotion = true
promotionRank = 10

[chaotic]
variantTemplate = fairy
maxFile = 11
maxRank = 10
startFen = ocjntkidjms/1g1wfafw1h1/ppppppppppp/11/11/11/11/PPPPPPPPPPP/1G1WFAFW1H1/OCJNTKIDJMS w - - 0 1
chess960 = true
customPiece1 = p:fFWfD
customPiece2 = n:NCZ
customPiece3 = b:DWB
customPiece4 = r:AFR
customPiece5 = q:RBDAHG
king = k:WFNH
customPiece7 = t:RB
customPiece8 = c:BN
customPiece9 = m:RN
customPiece10 = e:RNNB
customPiece11 = a:RNB
customPiece12 = d:WFDA
customPiece13 = f:FD
customPiece14 = w:WA
customPiece15 = g:fBbR
customPiece16 = h:fRbB
customPiece17 = i:WFNN
customPiece18 = j:ffNffCfDfH
customPiece19 = l:FWNADGH
customPiece20 = o:mRmBgRgB
customPiece21 = s:RFNC
flagPiece = k
promotionPieceTypes = -
promotedPieceType = p:e f:b w:r d:q j:l
mandatoryPiecePromotion = true
promotionRank = 10`
