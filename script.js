import OBR from "https://unpkg.com/@owlbear-rodeo/sdk@latest";
OBR.onReady(() => {
    let currentTokenId = '9e098ab3-f059-44ad-be1c-e903c5877579';
    let tokenWithPatch = '9e098ab3-f059-44ad-be1c-e903c5877579';
    let tokenWithoutPatch = '08f5e40e-6241-4b83-b478-41c13938bfde';

    document.getElementById('toggleTokenButton').addEventListener('click', () => {
        const newTokenId = currentTokenId === tokenWithPatch ? tokenWithoutPatch : tokenWithPatch;
        OBR.assets.updateAsset({
            id: currentTokenId,
            assetId: newTokenId
        });
        currentTokenId = newTokenId;
    });
});

